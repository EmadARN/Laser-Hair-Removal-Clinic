import { BiHome, BiTargetLock } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { IoIosPerson, IoMdPeople } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { TbSettings2 } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { FaSun, FaClock, FaListUl, FaPills, FaThumbsUp } from "react-icons/fa";
import { IoCloudyNightOutline } from "react-icons/io5";
import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { FaBottleWater } from "react-icons/fa6";
import { CiSquareInfo } from "react-icons/ci";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import ChoosingArea from "@/Components/userDashboard/widget/areasChoice";
import ChoosingPayAmount from "@/Components/userDashboard/widget/choosingPayAmount/ChoosingPayAmount";
import Date_Time from "@/Components/userDashboard/widget/date-time";
import ConfirmInfo from "@/Components/userDashboard/widget/informationConfirm";
import UserInformation from "@/Components/userDashboard/widget/registerForm";
import ReservationDone from "@/Components/userDashboard/widget/reservationDone/ReservationDone";
import Unsucces_Transaction from "@/Components/userDashboard/widget/unsuccessfull-transaction/Unsucces_Transaction";
// import { Home } from "@/Components/adminDashboard/widget/home";
import WeeklyCalendar from "@/Components/adminDashboard/widget/weeklyCalendar";
import Empolyees from "@/Components/adminDashboard/widget/employees";
import Clients from "@/Components/adminDashboard/widget/clients";
import Reports from "@/Components/adminDashboard/widget/reports";
import Setting from "@/Components/adminDashboard/widget/setting";
import AreaLazer from "@/Components/adminDashboard/widget/areaLazer";
import Home from "@/Components/adminDashboard/widget/home";
import DailyShift from "@/Components/reseptionDashboard/DailyShift";
import ResClients from "@/Components/reseptionDashboard/ResClients";

//َaboutUs
export const numberTicker = [
  { count: 1399, title: "سال تاسیس" },
  { count: 2849, title: "مشتریان" },
  { count: 5, title: "تعداد اوپراتور" },
  { count: 4, title: "تعداد دستگاه" },
];
//Home
export const data = [
  { id: 0, title: "خانه", icon: <HomeIcon />, src: "/" },
  { id: 1, title: "حساب کاربری", icon: <UserIcon />, src: "/userDashboard" },
  {
    id: 2,
    title: "ارتباط با ما",
    icon: <ChatBubbleBottomCenterIcon />,
    src: "/contactUs",
  },
  {
    id: 3,
    title: " درباره ما",
    icon: <CiSquareInfo />,
    src: "/aboutUs",
  },
];
export const datasWhyLaser = (Compare) => {
  return [
    {
      header: "50%",
      text: "کاهش مو پس از 2 هفته ",
      images: (
        <Compare
          firstImage={"images/body/homepage-after-2weeks.jpg"}
          secondImage={"/images/body/before-using-pure-fit-12.jpg"}
        />
      ),
    },
    {
      header: "88%",
      text: "کاهش مو پس از 8 هفته ",
      images: (
        <Compare
          firstImage={"images/body/homepage-after-2weeks.jpg"}
          secondImage={"/images/body/after-using-pure-fit-8treatments2.jpg"}
        />
      ),
    },
    {
      header: "99%",
      text: "کاهش مو پس از 12 هفته ",
      images: (
        <Compare
          firstImage={"images/body/homepage-after-2weeks.jpg"}
          secondImage={"/images/body/after-using-pure-fit-12treatments2.jpg"}
        />
      ),
    },
  ];
};
export const dataBanners = [
  { header: "رزور آنلاین", text: "از خانه نوبت خود را رزو کنید" },
  {
    header: "اپراتور های حرفه ای",
    text: "تمامی اپراتورهای لیانا لیزر دوره های تخصصی را گذرانده اند",
  },
  { header: "بهترین دستگاه ها", text: "دستگاه لیزر الکساندرایت نابلکس" },
];
export const boxes = [
  {
    icon: <FaSun size={32} color="#7563DC" />,
    title: "از نور خورشید دوری کنید",
    text: "از قرار گرفتن در معرض نور خورشید و سولاریوم، قبل، بعد و در حین جلسات لیزر مو خودداری شود.",
  },
  {
    icon: <FaPills size={32} color="#7563DC" />,
    title: "دارو ها بررسی شود",
    text: "قبل از شروع جلسات لیزر، استفاده از هرگونه مواد دارویی مثل کورتون، راکوتان، آنتی بیوتیک و کرم‌های لایه بردار را به پزشک کلینیک اطلاع دهید.",
  },
  {
    icon: <FaBottleWater size={32} color="#7563DC" />,
    title: "پوست خود را تمیز کنید",
    text: "اولین نکته، شیو موهای زائد بوسیله تیغ حدود یک روز قبل از شرکت در جلسه لیزر است. بهتر است از دو هفته قبل اپیلاسیون یا وکس موهای زائد انجام نشود.",
  },
  {
    icon: <FaThumbsUp size={32} color="#7563DC" />,
    title: "لوازم آرایشی استفاده نکنید",
    text: "قبل از حذف موهای زائد در کلینیک لیزر موهای زائد اصفهان نباید از عطر، دئودرانت، هر گونه کرم یا لوازم آرایشی بر روی پوست استفاده شود.",
  },
  {
    icon: <FaClock size={32} color="#7563DC" />,
    title: "از نوشیدن قهوه خودداری کنید",
    text: "حداقل چند ساعت قبل از لیزر درمانی از مصرف قهوه خودداری کنید. قهوه پوست را حساس تر می کند و ممکن است باعث ناراحتی یا درد شود.",
  },
  {
    icon: <FaListUl size={32} color="#7563DC" />,
    title: "اپیلاسیون و وکس نکنید",
    text: "توصیه می شود که حتما به مدت 6 هفته قبل از لیزر درمانی، از روش های دیگر رفع موهای زائد که مو را ریشه کن می کند ،استفاده نکنید.",
  },
];

export const DataFaQs = [
  {
    title: "چند جلسه زمان میبرد تا بتوان نتایج لیزر را مشاهده کرد؟",
    content:
      "10 جلسه اول به صورت ماهانه است (هر ۳۰ روز یکبار). پس از 10 جلسه عمده مراجعین وارد دوره شارژ شده و پس از ورود به دوره شارژ 5 جلسه ابتدایی هر 40 روز یکبار خواهد بود و پس از آن به تشخیص پزشک هر ۴۵ روز، سپس هر ۲ ماه، سپس هر 3 ماه تا برسد به هر سال ۱ مرتبه.",
  },
  {
    title: "بین جلسات لیزر چند مرتبه میتوان موهای زائد را اصلاح کرد؟",
    content:
      "برای شیو، محدودیتی وجود ندارد، مراجع کننده میبایست یک روز قبل از هر جلسه لیزر درمانی شیو بکند.",
  },
  {
    title: "آیا موهای نازک را میتوان لیزر کرد؟",
    content:
      "حداقل 3 تا 24 ساعت پس از جلسه لیزر از استحمام و برخورد مواد شوینده با محل لیزر شده و کیسه کشیدن محل لیزر خودداری کنید. در طول دوره لیزر، از سولار و آفتاب گرفتن خودداری کنید. از مصرف قرص راکوتان در طول در طول لیزر خودداری کنید. حداقل تا چند ساعت پس از لیزر درمانی از ورزش کردن خودداری کنید زیرا تعریق مضرات فراوانی خواهد داشت.",
  },
  {
    title: "موهای نازک را میتوان لیزر کرد؟",
    content:
      "موهای نازک، باید اصلاح گردد و لیزر درمانی بر روی این موها هیچگونه تاثیر مثبتی نخواهد داشت و نتیجه معکوس خواهد داد",
  },
  {
    title: "قیمت ها به چه صورت است؟",
    content:
      "شما میتوایند در هنگام رزرو نوبت تمامی نواحی را به همراه قیمت مشاهده فرمایید.",
  },
];

export const get_turn_data = [
  {
    id: 1,
    icon: <BiTargetLock color="#888" size={"24px"} />,
    title: "ورود و ثبت نام",
    desc: "درصورتی که برای اولین بار بصورت آنلاین اقدام به دریافت نوبت می کنید، ابتدا باید ثبت نام کرده و یا وارد حساب کاربری خود شوید. برای اینکار شماره تلفن خود را وارد کرده و سپس کد تایید ارسال شده وارد کنید.",
  },
  {
    id: 2,
    icon: <SlCalender color="#888" size={"24px"} />,
    title: "انتخاب روز و ساعت",
    desc: "با استفاده از خدمات رزرو انلاین کلینیک لیانا روز و بازه ساعتی که برایتان مناسب است را انتخاب کنید و سپس در زمان تعیین شده در کلینیک حضور پیدا کنید.",
  },
  {
    id: 3,
    icon: <IoMdPerson color="#888" size={"24px"} />,
    title: "اطلاعات پزشکی",
    desc: "در صورتی که اولین جلسه خود را رزرو میکنید نیاز است که اطلاعات پزشکی و شخصی خود را وارد کرده تا در صورت نیاز به راهنمایی پزشک از آن مطلع شوید.",
  },
  {
    id: 4,
    icon: <FaWallet color="#888" size={"24px"} />,
    title: "تایید و پرداخت",
    desc: "جهت نهایی سازی نوبت خود، مراجعین عزیز می بایست مبلغ در نظر گرفته شده به عنوان وثیقه را پرداخت کنند.",
  },
];
export const contactDetails = [
  {
    title: "شماره تماس",
    content: "09129129129",
  },
  {
    title: "آدرس کلینیک",
    content: "مهاباد. خیابان فیاضی. کوچه ی بهبهانی. پلاک ۴۲",
  },
  {
    title: "ساعت کاری",
    content:
      "همه روزه از ساعت 7:30 صبح تا 2 بعد از ظهر و 3 بعد از ظهر تا 11 شب",
  },
];
//AdminDashboard
export const admintData = [
  {
    id: 0,
    slug: "home",
    component: <Home />,
    amount: "خانه",
    icon: <BiHome />,
  },
  {
    id: 1,
    slug: "weeklyCalendar",
    component: <WeeklyCalendar />,
    amount: "برنامه هفتکی",
    icon: <SlCalender />,
  },
  {
    id: 2,
    slug: "employee",
    component: <Empolyees />,
    amount: "کارمندان",
    icon: <IoIosPerson />,
  },
  {
    id: 3,
    slug: "areaLazer",
    component: <AreaLazer />,
    amount: "نواحی لیزر",
    icon: <BiTargetLock />,
  },
  {
    id: 4,
    slug: "clients",
    component: <Clients />,
    amount: "مراجعین",
    icon: <IoMdPeople />,
  },
  {
    id: 5,
    slug: "reports",
    component: <Reports />,
    amount: "گزارشات",
    icon: <GrDocumentText />,
  },
  {
    id: 6,
    slug: "setting",
    component: <Setting />,
    amount: "تنظیمات",
    icon: <TbSettings2 />,
  },
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
export const radioOptions = {
  user_type: [
    { value: "اوپراتور", label: "اوپراتور" },
    { value: "منشی", label: "منشی" },
  ],
  decease_hist: [
    { value: "true", label: "دارم" },
    { value: "false", label: "ندارم" },
  ],
  drug_hist: [
    { value: "true", label: "دارم" },
    { value: "false", label: "ندارم" },
  ],
};

export const userInputs = [
  { label: "نام", name: "name", placeholder: "نام" },
  { label: "نام خانوادگی", name: "last_name", placeholder: "نام خانوادگی" },
  { label: "شماره موبایل", name: "phone_number", placeholder: "شماره موبایل" },
  { label: "نام کاربری", name: "username", placeholder: "نام کاربری" },
  {
    label: "رمز ورود",
    name: "password",
    placeholder: "رمز ورود",
    isPassword: true,
  },
];
export const headers = [
  { title: "روز", key: "day" },
  { title: "شیفت صبح", key: "morning" },
  { title: "شیفت عصر", key: "evening" },
  { title: "ساعت شروع نوبت دهی", key: "start" },
  { title: "ساعت اتمام نوبت دهی", key: "end" },
];
export const daysOfWeek = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

//ReceptionDashboard
export const receptionData = [
  {
    id: 0,
    slug: "dailyShifts",
    component: <DailyShift />,
    amount: "نوبت های روز",
    icon: <SlCalender />,
  },
  {
    id: 1,
    slug: "resClients",
    component: <ResClients />,
    amount: "لیست مراجعین",
    icon: <IoMdPeople />,
  },
];
export const TableData = [
  {
    id: 1,
    customerName: "علی احمدی",
    rezervationTime: "8.30",
    laserarea: "فول بادی",
  },
  {
    id: 1,
    customerName: "جنیفر رضایی",
    rezervationTime: "8.30",
    laserarea: " بیکینی",
  },
  {
    id: 1,
    customerName: "زهرا محمدی",
    rezervationTime: "8.30",
    laserarea: " زیربغل",
  },
  {
    id: 1,
    customerName: "زیبا منتظری",
    rezervationTime: "8.30",
    laserarea: "فول بادی",
  },
  {
    id: 1,
    customerName: "فاطمه احمدی",
    rezervationTime: "8.30",
    laserarea: "پا ",
  },
  {
    id: 1,
    customerName: "فاطمه احمدی",
    rezervationTime: "8.30",
    laserarea: "پا ",
  },
  {
    id: 1,
    customerName: "فاطمه احمدی",
    rezervationTime: "8.30",
    laserarea: "پا ",
  },
  {
    id: 1,
    customerName: "فاطمه احمدی",
    rezervationTime: "8.30",
    laserarea: "پا ",
  },
];

//UserDashboard
export const userData = [
  {
    slug: "userInformation",
    component: <UserInformation slug={"choosingArea"} />,
  },
  { slug: "choosingArea", component: <ChoosingArea slug={"dateTime"} /> },
  { slug: "dateTime", component: <Date_Time slug={"confirmInfo"} /> },
  {
    slug: "confirmInfo",
    component: <ConfirmInfo slug={"choosingPayAmount"} />,
  },

  {
    slug: "choosingPayAmount",
    component: <ChoosingPayAmount slug={"reservationDone"} />,
  },
  {
    slug: "reservationDone",
    component: <ReservationDone slug={"unsuccesTransaction"} />,
  },
  {
    slug: "unsuccesTransaction",
    component: <Unsucces_Transaction slug={"unsuccesTransaction"} />,
  },
];
export const steps = [
  { description: "اطلاعات مراجع", icon: FaUser },
  { description: "انتخاب نواحی", icon: FaMapMarkerAlt },
  { description: "تاریخ و ساعت", icon: FaCalendarAlt },
  { description: "تایید و پرداخت", icon: FaWallet },
];
export const items = [
  { text: "انتخاب شما", color: "#7563dc" }, // بنفش
  { text: "قابل انتخاب", color: "gray.400" }, // طوسی
  { text: "در انتظار پرداخت سایر مراجعین", color: "gray.400" }, // طوسی
];
export const UserData = [
  { id: 1, title: "تاریخ", value: "دوشنبه" },
  { id: 2, title: "زمان", value: "7.30-8.40" },
  { id: 3, title: "اپراتور", value: "نام اوپراتور" },
  { id: 3, title: "مبلغ کل", value: "230.000تومان " },
  { id: 3, title: "مبلغ پرداخت شده", value: "50.000تومان " },
  { id: 3, title: "مبلغ قابل پرداخت", value: "200.000تومان " },
];
export const dataForMap = (confrimInfoDetailCustomer, customerInformation) => {
  return [
    { id: 1, title: "نام", value: confrimInfoDetailCustomer.name || "" },
    {
      id: 2,
      title: "نام خانوادگی",
      value: confrimInfoDetailCustomer.last_name || "",
    },
    {
      id: 3,
      title: "شماره تلفن",
      value: confrimInfoDetailCustomer.phone_number || "",
    },
    {
      id: 4,
      title: "کد ملی",
      value: customerInformation.national_code || "",
    },
    {
      id: 5,
      title: "آدرس",
      value: customerInformation.address || "",
    },
    {
      id: 6,
      title: " تلفن ثابت",
      value: customerInformation.house_number || "",
    },
    {
      id: 7,
      title: "سابقه بیماری",
      value: customerInformation.drug_hist ? "بله" : "خیر",
    },
    {
      id: 8,
      title: "سابقه بیماری‌های جدی",
      value: customerInformation.decease_hist ? "بله" : "خیر",
    },
  ];
};
export const TurnData = (date, slots, operatorName) => {
  return [
    { id: 1, title: "روز و تاریخ", value: date || "" },
    { id: 2, title: "بازه زمانی", value: slots || "" },
    { id: 3, title: "اپراتور", value: operatorName || "" },
  ];
};
