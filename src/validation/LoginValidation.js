import * as Yup from "yup";

export const loginSchema=Yup.object().shape({
    email:Yup.string().required("نام کاربری الزامی میباشد"),
    password:Yup.string().required("پسورد الزامی میباشد")
});