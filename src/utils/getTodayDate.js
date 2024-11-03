export function getTodayDate() {
  const today = new Date().toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
  });

  return `امروز - ${today}`;
}
