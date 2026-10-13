# گزارش اعتبارسنجی نسخه نخست

- `npm run build`: موفق؛ Next.js 16.4.0 همه مسیرهای برنامه را به صورت Static/SSG ساخت و `out/` ایجاد شد.
- `npm run typecheck`: موفق؛ بدون خطای TypeScript.
- `npm run check:static`: موفق برای ۱۳ صفحه محتوایی؛ عنوان و توضیح یکتا، canonical، یک H1، JSON-LD قابل parse، breadcrumb صفحات داخلی، لینک‌های داخلی، sitemap و robots.
- مرورگر Chromium با Playwright در عرض‌های ۱۴۴۰، ۳۹۰ و ۳۲۰ پیکسل: بدون خطای JavaScript، بدون overflow افقی در صفحه اصلی و تماس، بارگذاری فونت محلی و غیرفعال بودن ورودی فرم. بازشدن منوی موبایل و پیمایش به تعرفه‌ها در عرض ۳۹۰ بررسی شد.
- `npm audit --omit=dev`: صفر آسیب‌پذیری گزارش‌شده در زمان اجرا.
- خروجی هیچ API route یا Cloudflare Worker ندارد؛ انتشار تنها فایل‌های `out/` را نیاز دارد.

این بررسی‌ها در محیط محلی روی خروجی production انجام شده‌اند؛ انتشار Cloudflare، اتصال DNS، ثبت Search Console، Rich Results Test آنلاین و داده میدانی Core Web Vitals انجام نشده‌اند. هیچ امتیاز Lighthouse یا تضمین رتبه ارائه نمی‌شود. وضعیت placeholders پیش از انتشار رسمی باید بررسی شود.
