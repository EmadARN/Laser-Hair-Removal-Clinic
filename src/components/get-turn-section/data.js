import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

export const get_turn_data = [
  {
    id: 1,
    icon: <BiTargetLock color="#865ea3"></BiTargetLock>,
    title: "ورود و ثبت نام",
    desc: "درصورتی که برای اولین بار بصورت آنلاین اقدام به دریافت نوبت می کنید، ابتدا باید ثبت نام کرده و یا وارد حساب کاربری خود شوید. برای اینکار شماره تلفن خود را وارد کرده و سپس کد تایید ارسال شده وارد کنید.",
  },

  {
    id: 2,
    icon: <SlCalender color="#865ea3"></SlCalender>,
    title: "انتخاب روز و ساعت",
    desc: "با استفاده از خدمات رزرو انلاین کلینیک لیانا روز و بازه ساعتی که برایتان مناسب است را انتخاب کنید و سپس در زمان تعیین شده در کلینیک حضور پیدا کنید",
  },

  {
    id: 3,
    icon: <IoMdPerson color="#865ea3" />,
    title: "اطلاعات پزشکی",
    desc: "در صورتی که اولین جلسه خود را رزرو میکنید نیاز است که اطلاعات پزشکی و شخصی خود را وارد کرده تا در صورت نیاز به راهنمایی پزشک از ان مطلع شویذ",
  },
  {
    id: 4,
    icon: <FaWallet color="#865ea3" />,
    title: "تایید و پرداخت",
    desc: "جهت نهایی سازی نوبت خود، مراجعین عزیز می بایست مبلغ در نظر گرفته شده به عنوان ویعه را پرداخت کنند.",
  },
];
