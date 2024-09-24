import { NextResponse } from "next/server";

export function middleware(req) {
  const { cookies } = req;
  const token = cookies.get("auth_token"); // چک کنید که آیا کوکی auth_token وجود دارد یا خیر
  //کپی از ادرس فعلی
  const url = req.nextUrl.clone();

  if (!token && url.pathname === "/userDashboard") {
    url.pathname = "/"; // مسیر صفحه اصلی یا صفحه ورود
    return NextResponse.redirect(url);
  }

  // اگر توکن وجود داشت، اجازه بدهید درخواست ادامه پیدا کند
  return NextResponse.next();
}

export const config = {
  matcher: ["/userDashboard"], // مسیرهایی که باید چک شوند
};
