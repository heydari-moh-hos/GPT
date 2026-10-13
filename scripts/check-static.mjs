import {readFileSync, existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import assert from 'node:assert/strict';
const paths=['/','/cloud-telephony/','/buy-cloud-phone/','/cloud-pbx/','/features/','/pricing/','/solutions/','/about/','/contact/','/blog/','/blog/cloud-vs-traditional-pbx/','/blog/internet-call-quality/','/blog/cloud-phone-buying-checklist/'];
const titles=new Set(),descriptions=new Set();
for(const path of paths){
 const file=join('out',path,'index.html');assert(existsSync(file),`Missing ${file}`);const html=readFileSync(file,'utf8');
 assert.match(html,/<html[^>]*lang="fa"[^>]*dir="rtl"/);
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${path}: single H1`);
 const title=html.match(/<title>([^<]+)<\/title>/)?.[1];assert(title);assert(!titles.has(title),`Duplicate title ${path}`);titles.add(title);
 const description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];assert(description);assert(!descriptions.has(description),`Duplicate description ${path}`);descriptions.add(description);
 assert(html.includes(`rel="canonical" href="https://buluttel.ir${path}"`),`Canonical ${path}`);
 assert.match(html,/property="og:title"/);assert.match(html,/name="twitter:card"/);
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
 assert(schemas.length,`Schema ${path}`);if(path!=='/')assert(schemas.some(s=>s['@type']==='BreadcrumbList'));
 for(const link of html.matchAll(/href="(\/[^"]*)"/g)){const target=decodeURIComponent(link[1].split(/[?#]/)[0]);if(target.startsWith('/_next/'))continue;assert(existsSync(join('out',target))||existsSync(join('out',target,'index.html')),`${path} broken link ${target}`);}
 assert(!html.includes('<form'),`No live form ${path}`);
 if(path==='/contact/')assert.match(html,/<fieldset disabled=""/);
}
const sitemap=readFileSync('out/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,paths.length);for(const path of paths)assert(sitemap.includes(`https://buluttel.ir${path}</loc>`));
assert(readFileSync('out/robots.txt','utf8').includes('Sitemap: https://buluttel.ir/sitemap.xml'));
assert(existsSync('out/404.html'));assert(existsSync('out/og-image.png'));assert(existsSync('out/_headers'));
assert(!existsSync('out/_worker.js'));assert(!existsSync('out/api'));
console.log(`PASS: ${paths.length} static pages, unique metadata, canonical, headings, JSON-LD, internal links, disabled consultation, sitemap/robots and Cloudflare assets.`);
