import type { Metadata } from 'next';
import '@fontsource/vazirmatn/arabic-400.css';
import '@fontsource/vazirmatn/arabic-500.css';
import '@fontsource/vazirmatn/arabic-700.css';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export const metadata: Metadata = { metadataBase:new URL('https://buluttel.ir'), title:{default:'بلوتل | تلفن ابری و ارتباطات سازمانی',template:'%s | بلوتل'}, icons:{icon:'/icon.svg'}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="fa" dir="rtl"><body><a className="skip-link" href="#main">رفتن به محتوای اصلی</a><Header/><main id="main">{children}</main><Footer/></body></html>}
