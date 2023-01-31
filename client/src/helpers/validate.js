import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    password: Yup.string()
        .min(3, "Password length should be minimum 4 characters!")
        .required("Password is required"),
});
