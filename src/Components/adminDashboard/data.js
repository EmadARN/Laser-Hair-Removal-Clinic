import { BiHome, BiTargetLock } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { IoIosPerson, IoMdPeople } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { TbSettings2 } from "react-icons/tb";
export const admintData = [
  { id: 0, name: "home", amount: "خانه", icon: <BiHome /> },
  { id: 1, name: "calender", amount: "برنامه هفتکی", icon: <SlCalender /> },
  { id: 2, name: "employee", amount: "کارمندان", icon: <IoIosPerson /> },
  { id: 3, name: "clientArea", amount: "نواحی لیزر", icon: <BiTargetLock /> },
  { id: 4, name: "clients", amount: "مراجعین", icon: <IoMdPeople /> },
  { id: 5, name: "reports", amount: "گزارشات", icon: <GrDocumentText /> },
  { id: 6, name: "setting", amount: "تنظیمات", icon: <TbSettings2 /> },
];
export const oprators = [
  [
    { id: 1, name: "علی احمدی", status: "فعال" },
    { id: 2, name: "زهرا حسینی", status: "غیرفعال" },
    { id: 3, name: "حسن رضایی", status: "فعال" },
  ],
  [
    { id: 1, name: "مریم کاظمی", status: "فعال" },
    { id: 2, name: "امین نوری", status: "غیرفعال" },
    { id: 3, name: "فاطمه زمانی", status: "فعال" },
  ],
];
