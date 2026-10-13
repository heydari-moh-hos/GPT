import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowLeft,
  Cloud,
  Headphones,
  Building2,
  Globe2,
  PhoneIncoming,
  Network,
  ShieldCheck,
  GitBranch,
  AudioLines,
  MoveUpRight,
  Check,
  Layers3,
  Wallet,
  BookOpen,
} from "lucide-react";
import { metadata, JsonLd } from "@/lib/seo";
import { articles, site } from "@/lib/content";
import { CallConsole, VoiceWave } from "@/components/call-console";
import { Reveal } from "@/components/reveal";
import { ScenarioExplorer } from "@/components/scenario-explorer";
export const generateMetadata = () =>
  metadata(
    "تلفن ابری و راهکارهای ارتباطی سازمانی",
    "با بلوتل، تلفن ابری و Cloud PBX را بشناسید؛ راهنمای انتخاب، امکانات رایج، هزینه‌ها و راهکارهای ارتباطی برای تیم‌های فروش و پشتیبانی.",
  );
export default function Home() {
  return (
    <div className="redesign">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          alternateName: "BulutTel",
          url: site.url,
        }}
      />
      <section className="v-hero">
        <div className="v-hero-grid" aria-hidden="true" />
        <div className="container v-hero-layout">
          <div className="v-hero-copy">
            <span className="v-kicker">
              <i /> CLOUD TELEPHONY, HUMAN CONNECTION
            </span>
            <h1>
              هر تماس،
              <br />
              شروع یک <span>ارتباط.</span>
            </h1>
            <p>
              تلفن ابری، فراتر از یک خط تلفن.
              <br />
              با بلوتل، مسیر ارتباط تیم و مشتری را بشناسید؛ از تماس ورودی تا
              پاسخ درست.
            </p>
            <div className="v-actions">
              <Link className="v-button" href="/contact/">
                مسیر مشاوره بلوتل <ArrowUpLeft size={20} />
              </Link>
              <Link className="v-button v-ghost" href="/cloud-telephony/">
                تلفن ابری چیست؟ <ArrowLeft size={18} />
              </Link>
            </div>
            <div className="v-hero-note">
              <ShieldCheck size={16} />
              <span>انتخاب آگاهانه، با اطلاعات روشن و قابل بررسی</span>
            </div>
          </div>
          <CallConsole />
        </div>
        <div className="container hero-bottom-line">
          <span>ارتباط ابری. نگاه یکپارچه.</span>
          <div>
            <span>
              <Building2 size={15} /> دفتر
            </span>
            <b>+</b>
            <span>
              <Globe2 size={15} /> شعب
            </span>
            <b>+</b>
            <span>
              <Headphones size={15} /> دورکاری
            </span>
          </div>
          <span dir="ltr">BUILT AROUND CONNECTION</span>
        </div>
      </section>
      <section className="v-value container v-section">
        <Reveal>
          <div className="v-section-top">
            <span className="v-kicker blue">۰۱ / نگاه بلوتل</span>
            <span className="v-side-label">
              فناوری وقتی ارزش دارد که ارتباط را بهتر کند.
            </span>
          </div>
          <div className="value-layout">
            <h2>
              خط‌ها را متصل کنید.
              <br />
              <span>ارتباط‌ها را بسازید.</span>
            </h2>
            <div>
              <p className="v-lead">
                مسئله فقط برقراری تماس نیست؛ مهم این است که مشتری به تیم مناسب
                برسد و تیم شما مسیر روشنی برای پاسخ‌گویی داشته باشد.
              </p>
              <Link className="v-text-link" href="/cloud-pbx/">
                با مرکز تلفن ابری آشنا شوید <ArrowUpLeft size={19} />
              </Link>
            </div>
          </div>
          <div className="value-principles">
            {[
              {
                icon: GitBranch,
                title: "مسیر روشن تماس",
                body: "از اولین زنگ تا رسیدن به بخش مناسب؛ جریان پاسخ‌گویی را طراحی کنید.",
              },
              {
                icon: Globe2,
                title: "تیم بدون مرز دفتر",
                body: "نیازهای شعب و دورکاری را با کیفیت شبکه و امنیت کنار هم بسنجید.",
              },
              {
                icon: Layers3,
                title: "انتخاب متناسب با شما",
                body: "امکانات را بر اساس مسئله واقعی تیم انتخاب کنید، نه طول فهرست ویژگی‌ها.",
              },
            ].map((v, i) => (
              <div key={v.title}>
                <span className="principle-index">۰{i + 1}</span>
                <v.icon size={27} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="v-product v-section">
        <div className="container">
          <Reveal>
            <div className="v-section-top">
              <span className="v-kicker">۰۲ / از مفهوم تا تجربه</span>
              <span className="v-side-label">نمای مفهومی محصول</span>
            </div>
            <div className="product-layout">
              <div className="product-copy">
                <h2>
                  پشت هر پاسخ خوب،
                  <br />
                  <span>یک مسیر هوشمندانه است.</span>
                </h2>
                <p className="v-lead">
                  یک سناریو را انتخاب کنید و مسیر پیشنهادی تماس را ببینید. این
                  نمایش به شناخت نیاز کمک می‌کند؛ مشخصات قطعی بلوتل پس از تأیید
                  منتشر می‌شوند.
                </p>
                <div className="product-detail">
                  <AudioLines size={26} />
                  <div>
                    <h3>صدا، در مرکز تجربه</h3>
                    <p>
                      کیفیت شبکه، طراحی مسیر و تجربه اپراتور را در کنار هم
                      ارزیابی کنید.
                    </p>
                  </div>
                </div>
                <Link className="v-text-link" href="/features/">
                  راهنمای امکانات تلفن ابری <ArrowUpLeft size={20} />
                </Link>
              </div>
              <ScenarioExplorer />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="v-how v-section container">
        <Reveal>
          <div className="v-section-top">
            <span className="v-kicker blue">۰۳ / مسیر یک تماس</span>
            <Link className="v-text-link" href="/cloud-telephony/">
              فناوری به زبان ساده <ArrowUpLeft size={18} />
            </Link>
          </div>
          <h2>
            از یک زنگ،
            <br />
            تا یک پاسخ درست.
          </h2>
          <div className="how-track">
            {[
              {
                icon: PhoneIncoming,
                n: "۰۱",
                title: "تماس آغاز می‌شود",
                body: "تماس ورودی به زیرساخت ارتباطی می‌رسد؛ نوع شماره و پوشش به قرارداد سرویس بستگی دارد.",
              },
              {
                icon: Cloud,
                n: "۰۲",
                title: "مرکز ابری مسیر می‌دهد",
                body: "قواعد پاسخ‌گویی و مقصدها در مرکز تلفن مدیریت می‌شوند؛ هر سرویس محدودیت‌های خودش را دارد.",
              },
              {
                icon: Headphones,
                n: "۰۳",
                title: "تیم پاسخ می‌دهد",
                body: "اپراتور با دستگاه سازگار و شبکه پایدار به تماس متصل می‌شود؛ تجربه را در شرایط واقعی بسنجید.",
              },
            ].map((s) => (
              <div className="how-stop" key={s.n}>
                <div className="how-icon">
                  <s.icon size={29} />
                </div>
                <span>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="v-solutions">
        <div className="container v-section">
          <Reveal>
            <div className="solutions-layout">
              <div>
                <span className="v-kicker blue">۰۴ / برای شیوه کار شما</span>
                <h2>
                  یک نسخه برای
                  <br />
                  <span>همه تیم‌ها کافی نیست.</span>
                </h2>
                <p className="v-lead">
                  راهکار ارتباطی از شناخت تیم شروع می‌شود. سناریوی مناسب را پیش
                  از انتخاب سرویس مشخص کنید.
                </p>
                <Link className="v-text-link" href="/solutions/">
                  همه راهکارهای سازمانی <ArrowUpLeft size={19} />
                </Link>
              </div>
              <div className="solution-list">
                {[
                  {
                    icon: Headphones,
                    n: "۰۱",
                    title: "فروش و پشتیبانی",
                    body: "مسیر مشخص برای تماس مشتری، مسئولیت روشن برای تیم.",
                  },
                  {
                    icon: Building2,
                    n: "۰۲",
                    title: "سازمان‌های چندشعبه‌ای",
                    body: "طراحی یکپارچه ارتباطات با توجه به نیاز هر شعبه.",
                  },
                  {
                    icon: Globe2,
                    n: "۰۳",
                    title: "تیم‌های دورکار",
                    body: "بررسی دسترسی، کیفیت اتصال و تداوم پاسخ‌گویی.",
                  },
                ].map((s) => (
                  <Link href="/solutions/" key={s.title}>
                    <span className="solution-list-icon">
                      <s.icon size={24} />
                    </span>
                    <div>
                      <span>{s.n} / سناریوی ارتباطی</span>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                    <ArrowUpLeft className="solution-arrow" size={24} />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="container v-section v-pricing">
        <Reveal>
          <div className="pricing-layout">
            <div className="pricing-heading">
              <span className="v-kicker blue">۰۵ / تصمیم شفاف</span>
              <h2>
                قیمت تنها یک عدد نیست.
                <br />
                <span>هزینه کل را ببینید.</span>
              </h2>
              <p className="v-lead">
                آبونمان، مکالمه، ظرفیت و خدمات افزوده را کنار هم بسنجید.
                تعرفه‌ها و بسته‌های بلوتل در انتظار تأیید هستند.
              </p>
              <Link className="v-button" href="/pricing/">
                راهنمای هزینه و تعرفه‌ها <ArrowUpLeft size={19} />
              </Link>
            </div>
            <div className="cost-sheet">
              <div className="cost-sheet-header">
                <Wallet size={25} />
                <span>چارچوب بررسی هزینه</span>
                <small>بدون قیمت اعلام‌شده</small>
              </div>
              {[
                "آبونمان و ظرفیت سرویس",
                "شماره و هزینه مکالمه",
                "راه‌اندازی و امکانات افزوده",
              ].map((t, i) => (
                <div className="cost-line" key={t}>
                  <span>۰{i + 1}</span>
                  <strong>{t}</strong>
                  <Check size={17} />
                </div>
              ))}
              <div className="cost-sheet-bottom">
                <span>مبنای مقایسه</span>
                <strong>نیاز واقعی کسب‌وکار شما</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="v-journal v-section">
        <div className="container">
          <Reveal>
            <div className="v-section-top">
              <span className="v-kicker blue">۰۶ / مجله بلوتل</span>
              <Link className="v-text-link" href="/blog/">
                همه راهنماها <ArrowUpLeft size={19} />
              </Link>
            </div>
            <h2>
              دانش بیشتر.
              <br />
              <span>انتخاب دقیق‌تر.</span>
            </h2>
            <div className="editorial-grid">
              {articles.map((a, i) => (
                <Link
                  href={`/blog/${a.slug}/`}
                  key={a.slug}
                  className={`editorial-item editorial-${i}`}
                >
                  <div className="editorial-art" aria-hidden="true">
                    {i === 0 ? (
                      <>
                        <Network size={66} />
                        <div className="editorial-orbit" />
                        <span>CLOUD / LOCAL</span>
                      </>
                    ) : i === 1 ? (
                      <>
                        <VoiceWave compact />
                        <span>VOICE / NETWORK</span>
                      </>
                    ) : (
                      <>
                        <BookOpen size={60} />
                        <span>THE BUYER’S GUIDE</span>
                      </>
                    )}
                  </div>
                  <div className="editorial-body">
                    <span>{a.eyebrow}</span>
                    <h3>{a.title}</h3>
                    <div className="editorial-read">
                      مطالعه راهنما <MoveUpRight size={19} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="v-final">
        <div className="final-rings" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <span className="v-kicker">
              ارتباط بهتر، از شناخت نیاز شروع می‌شود.
            </span>
            <h2>
              برای تماس بعدی،
              <br />
              <span>آماده‌تر باشید.</span>
            </h2>
            <p>
              نیازهای ارتباطی تیم‌تان را مشخص کنید.
              <br />
              قدم بعدی را با اطلاعات روشن بردارید.
            </p>
            <div className="v-actions">
              <Link href="/contact/" className="v-button">
                بررسی مسیر مشاوره <ArrowUpLeft size={21} />
              </Link>
              <Link href="/buy-cloud-phone/" className="v-button v-ghost">
                راهنمای خرید <ArrowLeft size={18} />
              </Link>
            </div>
            <small>
              مسیر دریافت درخواست هنوز فعال نیست؛ فرم مشاوره نمایشی است.
            </small>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
