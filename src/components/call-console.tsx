import {
  AudioLines,
  PhoneIncoming,
  PhoneForwarded,
  Headphones,
  Network,
  Circle,
  Command,
  MoreHorizontal,
  Cloud,
  Check,
  ArrowDownLeft,
} from "lucide-react";
export function VoiceWave({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`voice-wave ${compact ? "compact" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: compact ? 24 : 44 }, (_, i) => (
        <i
          key={i}
          style={{
            height: `${12 + ((i * 19 + 7) % 42)}px`,
            animationDelay: `${i * -0.085}s`,
          }}
        />
      ))}
    </div>
  );
}
export function CallConsole() {
  return (
    <div className="console-scene">
      <div className="console-halo" aria-hidden="true" />
      <div className="console-window">
        <div className="console-titlebar">
          <span className="console-brand">
            <AudioLines size={17} />
            <b dir="ltr">BulutTel / workspace</b>
          </span>
          <span className="console-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="console-shell">
          <div className="console-rail" aria-hidden="true">
            <Command />
            <PhoneIncoming className="active" />
            <Headphones />
            <Network />
            <Circle />
          </div>
          <div className="console-body">
            <div className="console-heading">
              <div>
                <small>مرکز ارتباط تیم</small>
                <h2>نمای مدیریت تماس</h2>
              </div>
              <span className="console-label">
                <i /> سناریوی نمونه
              </span>
            </div>
            <div className="incoming-call">
              <span className="call-orb">
                <PhoneIncoming size={25} />
              </span>
              <div>
                <small>تماس ورودی · مثال نمایشی</small>
                <strong>هدایت به تیم پشتیبانی</strong>
              </div>
              <MoreHorizontal size={20} />
            </div>
            <div className="console-wave">
              <div>
                <span>
                  <i /> موج صدای مفهومی
                </span>
                <AudioLines size={16} />
              </div>
              <VoiceWave />
            </div>
            <div className="operator-header">
              <span>داخلی‌ها و وضعیت اپراتور</span>
              <small>داده‌های نمونه</small>
            </div>
            <div className="operator">
              <span className="operator-avatar cyan">پ</span>
              <div>
                <strong>پشتیبانی</strong>
                <small>داخلی نمونه ۱۰۱</small>
              </div>
              <span className="operator-state">
                <i /> آماده پاسخ
              </span>
            </div>
            <div className="operator">
              <span className="operator-avatar violet">ف</span>
              <div>
                <strong>فروش</strong>
                <small>داخلی نمونه ۱۰۲</small>
              </div>
              <span className="operator-state busy">
                <i /> در حال مکالمه
              </span>
            </div>
            <div className="console-bottom">
              <Cloud size={14} />
              <span>اتصال ابری · نمایش مفهومی</span>
              <Check size={14} />
            </div>
          </div>
        </div>
      </div>
      <div className="floating-route">
        <span>
          <PhoneForwarded size={18} />
        </span>
        <div>
          <small>مسیریابی تماس</small>
          <strong>تماس درست، به تیم درست</strong>
        </div>
        <ArrowDownLeft size={17} />
      </div>
      <div className="floating-agent">
        <span className="agent-icon">
          <Headphones size={20} />
        </span>
        <div>
          <strong>تیم شما، متصل</strong>
          <small>دفتر · شعب · دورکاری</small>
        </div>
        <span className="agent-signal">
          <i />
          <i />
          <i />
        </span>
      </div>
      <p className="console-caption">
        نمای مفهومی؛ پنل واقعی یا فهرست امکانات تأییدشده بلوتل نیست.
      </p>
    </div>
  );
}
