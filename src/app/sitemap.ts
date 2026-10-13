import type { MetadataRoute } from 'next';
import {pages,articles,site} from '@/lib/content';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['/',...pages.map(p=>`/${p.slug}/`),'/blog/',...articles.map(p=>`/blog/${p.slug}/`)].map(path=>({url:site.url+path}));}
