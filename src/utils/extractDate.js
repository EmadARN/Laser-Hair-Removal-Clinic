export function extractDate(reserveTimeStr) {
  // عبارت منظم برای پیدا کردن الگوی تاریخ به شکل "1403/8/15"
  const dateMatch = reserveTimeStr.match(/\d{4}\/\d{1,2}\/\d{1,2}/);
  // اگر تاریخ پیدا شد، آن را برمی‌گردانیم وگرنه رشته خالی برمی‌گردد
  return dateMatch ? dateMatch[0] : "";
}
