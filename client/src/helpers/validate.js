import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    password: Yup.string().required("Password is required"),
});

export const MatchPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters"),
    confirmPassword: Yup.string().test(
        "passwords-match",
        "Passwords does not match",
        function (value) {
            return this.parent.password === value;
        }
    ),
});

export const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name address is required")
        .matches(/^[A-Za-z ]*$/, "Name must be only characters"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required"),
});
