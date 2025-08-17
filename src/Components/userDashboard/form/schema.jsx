import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام الزامی است")
    .min(2, "نام باید حداقل 2 حرف باشد"),
  last_name: Yup.string()
    .required("نام خانوادگی الزامی است")
    .min(2, "نام خانوادگی باید حداقل 2 حرف باشد"),
  phone_number: Yup.string()
    .required("شماره همراه الزامی است")
    .matches(/^\d{11}$/, "شماره همراه باید 11 رقم باشد"),
  national_code: Yup.string()
    .required("کد ملی الزامی است")
    .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد"),
  address: Yup.string()
    .required("آدرس الزامی است")
    .min(5, "آدرس باید حداقل 5 حرف باشد"),
  house_number: Yup.string()
    .required("شماره ثابت الزامی است")
    .matches(/^\d{8,}$/, "شماره ثابت باید حداقل 8 رقم باشد"),
  drug_hist: Yup.boolean(), // اختیاری
  decease_hist: Yup.boolean(), // اختیاری
});
