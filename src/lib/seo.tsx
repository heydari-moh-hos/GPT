import type { Metadata } from 'next';
import { site } from './content';
export function metadata(title: string, description: string, path = '/'): Metadata {
 const url = new URL(path, site.url).toString();
 return { title, description, alternates: { canonical: url }, openGraph: { title: `${title} | بلوتل`, description, url, siteName: site.name, locale: 'fa_IR', type: 'website', images: [{url:'/og-image.png',width:1200,height:630,alt:'بلوتل؛ ارتباط کسب‌وکار شما، فراتر از یک خط تلفن'}] }, twitter: { card: 'summary_large_image', title, description, images:['/og-image.png'] } };
}
export function JsonLd({data}:{data:object}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\u003c')}} />; }
