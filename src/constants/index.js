import { BiHome, BiTargetLock } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { IoIosPerson, IoMdPeople } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { TbSettings2 } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoCloudyNightOutline } from "react-icons/io5";
import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
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
//Home
export const data = [
  { id: 0, title: "خانه", icon: <HomeIcon />, src: "/" },
  { id: 1, title: "حساب کاربری", icon: <UserIcon />, src: "/UserDashboard" },
  {
    id: 2,
    title: "درباره لیزر و سوالات متداول",
    icon: <ChatBubbleBottomCenterIcon />,
    src: "/",
  },
];
export const DataFaQsOne = [
  {
    id: 1,
    Title:
      "1 -هرگونه بیماری پوستی یا غیر پوستی و حساسیت های احتمالی که در گذشته داشته اند یا در حال حاضر تحت درمان هستند را باید حتماً به پزشکشان اطلاع بدهند.",
  },
  {
    id: 2,
    Title:
      "2 -اگر سابقه تبخال یا عفونت های مکرر پوستی، در محل تحت درمان با لیزر دارند، باید پزشک معالج را مطلع نمایند.",
  },
  {
    id: 3,
    Title:
      "3 -اگر دارویی را به طور مرتب استفاده می کنند، حتی اگر آن دارو قرص سردرد معمولی یا قرص جلوگیری از بارداری باشد، باید پزشکشان را در جریان قرار بدهند...",
  },
  {
    id: 4,
    Title:
      "4 - درصورتی که مراجع تاکنون آزمایش هورمونی و غیرهورمونی داشته است باید شان را پزشک مربوطه را مطلع کرده و نتیجه آزمایش را نشان دهد. اختلالات هورمونی آن ها حتما باید پیش از درمان با لیزر، تحت بررسی و درمان قرار بگیرد و شایان ذکر است که در صورت سلامتی کامل شخص و تایید پزشک معالج، حداقل زمان ممکن برای نتیجه گیری از امر لیزر درمانی، بین 12 تا 18 جلسه می باشد.",
  },
  {
    id: 5,
    Title:
      "5 -کندن موها با موم و موچین و اپیلاسیون و الکترولیز تا ۶ هفته قبل از لیزر و نیز در فواصل جلسات لیزر اکیدا ممنوع است اما تراشیدن موها با تیغ مانعی ندارد و مضافاً این که چنان چه هر شخص، ترتیب و فاصله 4 تا ۵ هفته ای بین جلسات لیزر را رعایت نماید، هرگونه عدم نتیجه گیری و اختلال در امر لیزر درمانی و عواقب ناشی از آن، صرفاً بر عهده خود شخص سهل انگار می باشد.",
  },
  {
    id: 6,
    Title:
      "6 -استفاده از کرم موبر اگرچه مانعی ندارد ولی به دلیل احتمال بروز واکنش های حساسیتی، بهتر است از استفاده آن خودداری گردد.",
  },
  {
    id: 7,
    Title:
      "7 -از یک ماه قبل از شروع لیزر و نیز در فواصل جلسات لیزر اکیداً از آفتاب پرهیز کرده و کرم ضدآفتاب استفاده کنند. استفاده از فرآورده های اتوبرنزه، قبل ازشروع لیزر و در فواصل جلسات لیزر ممنوع است.",
  },
  {
    id: 8,
    Title:
      "8 -در صورت وجود آفتاب سوختگی در محل تحت درمان با لیزر، احتمال بروز عوارض جانبی، نظیر زخم و تاول پوستی بیشتر می شود و احتمال اثربخشی لیزر کمتر می شود. معمولا اگر منطقه مورد نظر دچار آفتاب سوختگی باشد، اصلا لیزر انجام نخواهد شد.",
  },
  {
    id: 9,
    Title:
      "9 -اگر پوست آن ها خیلی تیره است، می توانند با نظر پزشک معالجشان پیش از انجام لیزر، از ترکیبات بی رنگ کننده و لایه بردار پوست مثل هیدروکینون و ترتینوئین استفاده نمایند.",
  },
  {
    id: 10,
    Title:
      "10 -روز انجام لیزر، هرگونه آرایش و استفاده از کرم ممنوع می باشد. منطقه مورد درمان باید کامل شسته و تمیز باشد و به هیچ وجه نباید از ژل های بی حس کننده نظیر لیدوکائین و... استفاده نمود.",
  },
  {
    id: 11,
    Title:
      "11 -در صورت مصرف ترکیبات حاوی رتینوئیک اسید مثل آکوتان و راکوتان و کرمهای حاوی ویتامین A و ترکیبات پیلینگ و زینک، موضوع را به پزشک اطلاع داده تا لیزر به تعویق افتاده و آمادگی لازم به دست آید.",
  },
  {
    id: 12,
    Title:
      "12 -اگر جهت ریزش مو از ترکیبات حاوی ماینوکسیدیل استفاده می کنند ممکن است علت پرمویی آن ها این مسئله باشد لذا این موضوع را به پزشک خود اطلاع بدهند.",
  },
  {
    id: 13,
    Title:
      "13 -در صورت مصرف برخی داروها مانند فنی توئین (داروی صرع) ، سیکلوسپرین (داروی بیماران پیوند کلیه)، پنی سیلین و کورتون ها چون این داروها می توانند خود، سبب پرمویی شوند، مراتب را به پزشک خود اطلاع بدهند.",
  },
  {
    id: 14,
    Title:
      "14 -توصیه می شود تا زمانی که ناحیه لیزر شده ملتهب است از تعریق زیاد (مانند ورزش سنگین یا محیط های بسیار گرم) و شنا کردن خودداری شود تا احتمال جوش زدن در محل کاهش یابد و فرد دچار سوختگی نشود.",
  },
  {
    id: 15,
    Title:
      "15 -اگر در ناحیه ای که می خواهند لیزر کنند تتو دارند، بدانند که ممکن است تتو، کمرنگ یا پاک شود و یا دچار سوختگی گردد فلذا به هیچ وجه بر روی محل تتو لیزر درمانی انجام نمی پذیرد.",
  },
  {
    id: 16,
    Title:
      "16 -لیزر موهای زائد روی موهای سفید تاثیری ندارد و باید موهای سفید را الکترولیز نموده. اما چون تنها راه از بین بردن موهای زائد در این حالت انجام لیزر موهای زائد است توصیه می شود هر چه سریعتر قبل از سفید شدن، لیزر موهای زائد را شروع کنند.",
  },
  {
    id: 17,
    Title:
      "17 -باید توجه داشت که سرعت نتیجه گیری نقاط مختلف بدن به لیزر موهای زائد متفاوت است لذا ممکن است در برخی نواحی سریع تر به نتیجه رسید اما درمان بعضی نقاط دیگر طولانی تر باشد در عین حال در هر منطقه همه موها در یک فاز ( اعم از رشد ، سکون یا ریزش) نیستند و ممکن است یک قسمت بریزد اما ناحیه مجاور آن باقی بماند، این به معنی انجام نشدن لیزر در ناحیه باقیمانده نیست بلکه به علت آنکه موها در آن زمان در فاز رشد نبوده اند ، تحت تأثیر لیزر قرار نگرفته اند و در جلسات بعدی به تدریج درمان خواهند شد.",
  },
  {
    id: 18,
    Title:
      "18 -استفاده خانم ها در دوران بارداری از لیزر درمانی موهای زائد ممنوع است نه به خاطر اینکه ممکن است لیزر به بافت های زیرین و اعضای داخلی بدن نفوذ پیدا کرده و به جنین آسیبی برساند بلکه برای احتیاط و جلوگیری از اینکه خدای ناکرده اگر برای جنین اتفاقی رخ دهد مادر فکر کند به علت لیزر درمانی که در دوران حاملگی انجام داده است تاثیر منفی روی جنین گذاشته است. فلذا لیزر درمانی نباید هیچ گاه در دوران بارداری انجام گردد اما برای خانم ها در دوران شیردهی هیچ منع استفادهای وجود ندارد ولیکن به جهت احتیاط بیشتر در دوران شیردهی، در ناحیه سینه ها، لیزر درمانی انجام نمی پذیرد.",
  },
  {
    id: 19,
    Title:
      "19 -لیزر درمانی به هیچ وجه و تحت هیچ شرایطی بر روی نواحی دارای عارضه واریس و ماه گرفتگی و ... انجام نمی پذیرد، چرا که احتمال سوختگی در این نواحی بسیار بالا بوده و دور از انتظار نیست.",
  },
];

export const DataFaQsTwo = [
  {
    id: 1,
    title: "چند جلسه زمان میبرد تا بتوان نتایج لیزر را مشاهده کرد؟",
  },
  {
    id: 2,
    title:
      "10 جلسه اول به صورت ماهانه است (هر ۳۰ روز یکبار). پس از 10 جلسه عمده مراجعین وارد دوره شارژ شده و پس از ورود به دوره شارژ 5 جلسه ابتدایی هر 40 روز یکبار خواهد بود و پس از آن به تشخیص پزشک هر ۴۵ روز، سپس هر ۲ ماه، سپس هر 3 ماه تا برسد به هر سال ۱ مرتبه.",
    textColor: "gray",
  },
  {
    id: 3,
    title:
      "با چه وسیله ای می بایست قبل از شروع هر جلسه لیزر درمانی نسبت به اصلاح موهای زائد اقدام کرد؟",
  },
  {
    id: 4,
    title: "فقط با ژیلت",
    textColor: "gray",
  },
  {
    id: 5,
    title: "بین جلسات لیزر چند مرتبه میتوان موهای زائد را اصلاح کرد؟",
  },
  {
    id: 6,
    title:
      "برای شیو، محدودیتی وجود ندارد، مراجع کننده میبایست یک روز قبل از هر جلسه لیزر درمانی شیو بکند.",
    textColor: "gray",
  },
  {
    id: 7,
    title: "مراقبت ها بعد از لیزر درمانی چیست؟",
  },
  {
    id: 8,
    title:
      "حداقل 3 تا 24 ساعت پس از جلسه لیزر از استحمام و برخورد مواد شوینده با محل لیزر شده و کیسه کشیدن محل لیزر خودداری کنید. در طول دوره لیزر، از سولار و آفتاب گرفتن خودداری کنید. از مصرف قرص راکوتان در طول در طول لیزر خودداری کنید. حداقل تا چند ساعت پس از لیزر درمانی از ورزش کردن خودداری کنید زیرا تعریق مضرات فراوانی خواهد داشت.",
    textColor: "gray",
  },
  {
    id: 9,
    title: "آیا موهای نازک را میتوان لیزر کرد؟",
  },
  {
    id: 10,
    title:
      "موهای نازک، باید اصلاح گردد و لیزر درمانی بر روی این موها هیچگونه تاثیر مثبتی نخواهد داشت و نتیجه معکوس خواهد داد.",
    textColor: "gray",
  },
  {
    id: 11,
    title: "قیمت ها به چه صورت است؟",
  },
  {
    id: 12,
    title:
      "شما میتوایند در هنگام رزرو نوبت تمامی نواحی را به همراه قیمت مشاهده فرمایید.",
    textColor: "gray",
  },
];

export const DataFaQsThree = [
  {
    id: 1,
    Title:
      "10 جلسه اول به صورت ماهانه است (هر ۳۰ روز یکبار). پس از 10 جلسه عمده مراجعین وارد دوره شارژ شده و پس از ورود به دوره شارژ 5 جلسه ابتدایی هر 40 روز یکبار خواهد بود و پس از آن به تشخیص پزشک هر ۴۵ روز، سپس هر ۲ ماه، سپس هر 3 ماه تا برسد به هر سال ۱ مرتبه.",
    textColor: "gray",
  },
];
export const DataFaQsFour = [
  {
    id: 1,
    Title:
      "شما میتوایند در هنگام رزرو نوبت تمامی نواحی را به همراه قیمت مشاهده فرمایید.",
    textColor: "gray",
    size: "",
  },
];

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

export const inputDataEmployee = (usersForm, show, handleClick) => {
  return [
    { label: "نام", name: "name", placeholder: "نام", value: usersForm.name },
    {
      label: "نام خانوادگی",
      name: "last_name",
      placeholder: "نام خانوادگی",
      value: usersForm.last_name,
    },
    {
      label: "شماره موبایل",
      name: "phone_number",
      placeholder: "شماره موبایل",
      value: usersForm.phone_number,
    },
    {
      label: "نام کاربری منشی (به انگلیسی)",
      name: "username",
      placeholder: "نام کاربری",
      value: usersForm.username,
    },
    {
      label: "رمز ورود منشی",
      name: "password",
      placeholder: "رمز ورود منشی",
      value: usersForm.password,
      type: show ? "text" : "password",
      showPassword: { show, onClick: handleClick },
    },
    {
      label: "کد ملی",
      name: "national_code",
      placeholder: "کد ملی",
      value: usersForm.national_code,
    },
    {
      label: "آدرس محل زندگی",
      name: "address",
      placeholder: "آدرس",
      value: usersForm.address,
    },
    {
      label: "شماره تماس منزل",
      name: "house_number",
      placeholder: "شماره تماس",
      value: usersForm.house_number,
    },
    {
      label: "دکتر",
      name: "doctor",
      placeholder: "دکتر",
      value: usersForm.doctor,
    },
  ];
};
//ReceptionDashboard
export const receptionData = [
  {
    id: 0,
    name: "dailyShifts",
    amount: "نوبت های روز",
    icon: <SlCalender />,
  },
  {
    id: 1,
    name: "listOfClients",
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
  { slug: "choosingArea", component: <ChoosingArea slug={"dateTime"} /> },
  { slug: "dateTime", component: <Date_Time slug={"confirmInfo"} /> },
  { slug: "confirmInfo", component: <ConfirmInfo slug={"userInformation"} /> },
  {
    slug: "userInformation",
    component: <UserInformation slug={"choosingPayAmount"} />,
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

export const day = [
  {
    id: 1,
    h1: "18 اسفند",
    h2: "سهشنبه",
    name: " بازه 3",
  },
  {
    id: 2,
    h1: "18 اسفند",
    h2: "سهشنبه",
    name: " بازه 3",
  },
  {
    id: 3,
    h1: "18 اسفند",
    h2: "سهشنبه",
    name: " بازه 3",
  },

  {
    id: 4,
    h1: "18 اسفند",
    h2: "سهشنبه",
    name: " بازه 3",
  },
  {
    id: 5,
    h1: "18 اسفند",
    h2: "سهشنبه",
    name: " بازه 3",
  },
  {
    id: 6,
    h1: "18 اسفند",
    h2: "سهشنبه",
    name: " بازه 3",
  },
];
export const shift = [
  {
    id: 1,
    icon: <FaSun />,
    text: "َشیفت صبح",
  },

  {
    id: 2,
    icon: <IoCloudyNightOutline />,
    text: "َشیفت عصر",
  },
];
export const time = [
  {
    id: 1,

    time: "9 تا 11",
  },
  {
    id: 2,

    time: "4 تا 8",
  },
];
export const UserData = [
  { id: 1, title: "تاریخ", value: "دوشنبه" },
  { id: 2, title: "زمان", value: "7.30-8.40" },
  { id: 3, title: "اپراتور", value: "نام اوپراتور" },
  { id: 3, title: "مبلغ کل", value: "230.000تومان " },
  { id: 3, title: "مبلغ پرداخت شده", value: "50.000تومان " },
  { id: 3, title: "مبلغ قابل پرداخت", value: "200.000تومان " },
];
export const dataForMap = [
  { id: 1, title: "نام", value: "نام مرجع" },
  { id: 2, title: "نام خانوادگی", value: "نام خانوادگی" },
  { id: 3, title: "شماره موبایل", value: "09190978042" },
  { id: 4, title: "تلفن ثابت", value: "024123455" },
  { id: 5, title: "کدملی", value: "0312028156" },
  { id: 6, title: "دارو مصرفی", value: "" },
  { id: 7, title: "سابقه بیماری", value: "" },
];
export const TurnData = [
  { id: 1, title: "روز و تاریخ", value: "سه شنبه ۲۶/۱۲/۱۴۰۲" },
  { id: 2, title: "بازه زمانی", value: "9-11.30" },
  { id: 3, title: "اپراتور", value: "نام اپراتور" },
];
