import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

export const get_turn_data = [
    {
        id:1,
        icon:<BiTargetLock color="#865ea3" size="25px"></BiTargetLock>,
        title:"  انتخاب نواحی لیزر",
        desc:"شما میتوانید نواحی بدن خود که میخواهید لیزر کنید را انتخاب کرده و جمع هزینه و زمان مورد نیاز لیزر نواحی که انتخاب کرذه اید را مشاهده و تایید کنید"
    },

    {
        id:2,
        icon:<SlCalender color="#865ea3"  size="25px"></SlCalender>,
        title:"انتخاب روز و ساعت",
        desc:"با استفاده از خدمات رزرو انلاین کلینیک لیانا روز و بازه ساعتی که برایتان مناسب است را انتخاب کنید و سپس در زمان تعیین شده در کلینیک حضور پیدا کنید"
    },

    {
        id:3,
        icon:<IoMdPerson color="#865ea3"  size="25px"/>,
        title:"اطلاعات پزشکی",
        desc:'در صورتی که اولین جلسه خود را رزرو میکنید نیاز است که اطلاعات پزشکی و شخصی خود را وارد کرده تا در صورت نیاز به راهنمایی پزشک از ان مطلع شویذ'
    },
    {
        id:4,
        icon:<FaWallet color="#865ea3"  size="25px"/>,
        title:"پرداخت ودیعه",
        desc:"جهت نهایی سازی نوبت خود ِمراجعین عزیز می بایست مبلغ در نظر گرفته شده به عنوان ودیعه را پرداخت کنید"

    }
]