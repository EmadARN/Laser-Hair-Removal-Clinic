export function extractDate(reserveTimeStr) {
  if (!reserveTimeStr || typeof reserveTimeStr !== "string") {
    // اگر مقدار ورودی undefined, null یا غیر رشته بود
    return "";
  }
  // عبارت منظم برای پیدا کردن الگوی تاریخ به شکل "1403/8/15"
  const dateMatch = reserveTimeStr.match(/\d{4}\/\d{1,2}\/\d{1,2}/);
  // اگر تاریخ پیدا شد، آن را برمی‌گردانیم وگرنه رشته خالی برمی‌گردد
  return dateMatch ? dateMatch[0] : "";
}

export function extractTime(reserveTimeStr) {
  if (!reserveTimeStr || typeof reserveTimeStr !== "string") {
    // اگر مقدار ورودی undefined, null یا غیر رشته بود
    return "";
  }
  // عبارت منظم برای پیدا کردن الگوی زمان مانند "10:00" یا "10:00:00"
  const timeMatch = reserveTimeStr.match(/\b\d{1,2}:\d{2}(?::\d{2})?\b/);
  // اگر زمان پیدا شد، آن را برمی‌گردانیم وگرنه رشته خالی برمی‌گردد
  return timeMatch ? timeMatch[0].slice(0, 5) : "";
}

export function getTodayDate() {
  const today = new Date().toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
  });

  return `امروز - ${today}`;
}

export function getTodayDateYear() {
  const today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
  });

  return `درآمد - ${today}`;
}

export function getMonthDate() {
  const today = new Date().toLocaleDateString("fa-IR", {
    month: "long",
  });

  return `${today}`;
}

export function getDayPart() {
  const getTimeOfDay = (hour) => {
    if (hour >= 5 && hour < 12) {
      return "صبح";
    } else if (hour >= 12 && hour < 17) {
      return "ظهر";
    } else if (hour >= 17 && hour < 21) {
      return "عصر";
    } else {
      return "شب";
    }
  };

  // استفاده از تابع
  const currentHour = new Date().getHours();
  const timeOfDay = getTimeOfDay(currentHour);

  return timeOfDay;
}
