export const RESERVE_STATUSES = {
    pe: "رزرو شده",
    co: "تکمیل شده",
    sc: "کنسل شده",
    do: "در انتظار پرداخت",
  };

 export const getReserveStatus = (reserveType) =>
    RESERVE_STATUSES[reserveType] || "اطلاعات موجود نیست";