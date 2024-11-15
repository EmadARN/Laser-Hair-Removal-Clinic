import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  const { cookies } = req;

  // دریافت کوکی‌ها
  const token = cookies.get("auth_token");
  const adminToken = cookies.get("auth_Admin_token");
  const employeeToken = cookies.get(" auth_Employee_token");

  // userDashboard
  // بررسی مسیری که در آن قرار داریم
  if (pathname.startsWith("/userDashboard")) {
    // اگر توکن موجود نباشد، کاربر را به صفحه ورود هدایت می‌کنیم
    if (!token) {
      return NextResponse.redirect(new URL("/signInCustomer", url));
    }
  }
  
  // adminDashboard
  if (pathname.startsWith("/adminDashboard")) {
    if (!adminToken) {
      return NextResponse.redirect(new URL("/loginManagerReception", url));
    }
  }

  // reseptionDashboard
  if (pathname.startsWith("/reseptionDashboard")) {
    if (!employeeToken) {
      return NextResponse.redirect(new URL("/loginManagerReception", url));
    }
  }
  // اگر همه چیز صحیح باشد، ادامه درخواست داده می‌شود
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/userDashboard/:path*",
    "/adminDashboard/:path*",
    "/reseptionDashboard/:path*",
  ],
};
