"use client";
import { useState } from "react";
import {
  PhoneIncoming,
  ArrowDown,
  Headphones,
  Users,
  Clock3,
  GitBranch,
} from "lucide-react";
const scenarios = [
  {
    id: "support",
    name: "پاسخ‌گویی تیمی",
    icon: Headphones,
    destination: "گروه پشتیبانی",
    rule: "هدایت به گروه پاسخ‌گویی",
    description:
      "مسیر تماس را بر اساس نوع درخواست طراحی کنید. ظرفیت صف و رفتار در نبود پاسخ باید با ارائه‌دهنده بررسی شود.",
  },
  {
    id: "branches",
    name: "ارتباط شعب",
    icon: Users,
    destination: "تیم شعبه مقصد",
    rule: "انتخاب مقصد تماس",
    description:
      "برای چند شعبه، مسئولیت پاسخ‌گویی هر بخش را مشخص کنید. دسترسی از هر مکان به کیفیت شبکه و امکانات تأییدشده سرویس وابسته است.",
  },
  {
    id: "hours",
    name: "ساعات کاری",
    icon: Clock3,
    destination: "مسیر خارج از ساعت کاری",
    rule: "بررسی برنامه پاسخ‌گویی",
    description:
      "برای خارج از ساعات کاری، مسیر مشخصی تعریف کنید. امکان اجرای پیام یا انتقال جایگزین باید پیش از خرید تأیید شود.",
  },
];
export function ScenarioExplorer() {
  const [selected, setSelected] = useState("support");
  return (
    <div className="scenario-explorer">
      <div className="scenario-controls" aria-label="انتخاب سناریوی مفهومی">
        {scenarios.map((s) => (
          <button
            type="button"
            key={s.id}
            aria-pressed={selected === s.id}
            aria-controls={`scenario-${s.id}`}
            onClick={() => setSelected(s.id)}
          >
            <s.icon size={19} />
            {s.name}
          </button>
        ))}
      </div>
      {scenarios.map((s) => (
        <div
          id={`scenario-${s.id}`}
          key={s.id}
          hidden={selected !== s.id}
          className="scenario-panel"
        >
          <div className="scenario-flow">
            <div>
              <PhoneIncoming size={20} />
              <span>تماس ورودی</span>
            </div>
            <ArrowDown size={20} />
            <div className="routing-rule">
              <GitBranch size={21} />
              <span>{s.rule}</span>
            </div>
            <ArrowDown size={20} />
            <div>
              <s.icon size={20} />
              <span>{s.destination}</span>
              <i />
            </div>
          </div>
          <p>{s.description}</p>
        </div>
      ))}
      <small className="scenario-disclaimer">
        سناریوهای مفهومی، برای ارزیابی نیاز؛ قابلیت‌های محصول نیازمند تأیید
        هستند.
      </small>
    </div>
  );
}
