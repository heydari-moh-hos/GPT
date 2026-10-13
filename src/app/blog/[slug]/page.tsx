import { notFound } from 'next/navigation';
import { articles } from '@/lib/content';
import { metadata } from '@/lib/seo';
import { ContentView } from '@/components/content-page';
export const dynamicParams=false;
export function generateStaticParams(){return articles.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=articles.find(p=>p.slug===slug);return p?metadata(p.title,p.description,`/blog/${slug}/`):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=articles.find(p=>p.slug===slug);if(!p)notFound();return <ContentView page={p} article/>;}
