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
