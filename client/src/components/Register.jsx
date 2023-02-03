import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { RegisterSchema } from "../helpers/validate";
import profile from "../assets/profile.png";
import convertToBase64 from "../helpers/convert";

const Register = () => {
    const [file, setFile] = useState("");

    const onUpload = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="border-4 border-gray-50 bg-[#ffffff8c] w-[60%] sm:w-[50%] lg:w-[40%] xl:w-[30%] rounded-3xl py-12 md:py-16 xl:py-20 px-0 xl:px-7 min-w-max backdrop-blur-[8px] shadow-[0_4px_30px_#4747470b]">
                    <div className="title flex flex-col items-center">
                        <h4 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                            Create Account
                        </h4>
                        <span className="py-4 text-md md:text-lg xl:text-xl w-2/3 text-center text-gray-500">
                            Explore more by connecting with us.
                        </span>
                    </div>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={async (values) => {
                            values = await Object.assign(values, {
                                profile: file || "",
                            });
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="mt-4 textbox flex flex-col items-center">
                                    <div className="w-full text-center">
                                        <label htmlFor="profilePic">
                                            <img
                                                src={file || profile}
                                                alt="avatar"
                                                className="mx-auto w-[120px] border border-slate-300 rounded-full cursor-pointer"
                                            />
                                        </label>
                                        <Field
                                            type="file"
                                            name="profilePic"
                                            id="profilePic"
                                            className="hidden"
                                            onChange={onUpload}
                                        />
                                    </div>
                                    <div className="mt-6 w-full text-center">
                                        <Field
                                            type="text"
                                            name="name"
                                            className={`border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none ${
                                                errors.name && touched.name
                                                    ? "invalid"
                                                    : ""
                                            }`}
                                            placeholder="Name"
                                        />
                                        {errors.name && touched.name ? (
                                            <div className="mt-2 text-[13px] text-red-600">
                                                {errors.name}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-6 w-full text-center">
                                        <Field
                                            type="email"
                                            name="email"
                                            className={`border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none ${
                                                errors.email && touched.email
                                                    ? "invalid"
                                                    : ""
                                            }`}
                                            placeholder="Email"
                                        />
                                        {errors.email && touched.email ? (
                                            <div className="mt-2 text-[13px] text-red-600">
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-6 w-full text-center">
                                        <Field
                                            type="password"
                                            name="password"
                                            className={`border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none ${
                                                errors.password &&
                                                touched.password
                                                    ? "invalid"
                                                    : ""
                                            }`}
                                            placeholder="Password"
                                        />
                                        {errors.password && touched.password ? (
                                            <div className="mt-2 text-[13px] text-red-600">
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div>

                                    <button
                                        className="mt-6 bg-blue-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-blue-600 transition duration-300 ease"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="pt-4 text-center">
                                    <span className="text-gray-500">
                                        Already Registered?{" "}
                                        <Link
                                            className="text-blue-500 hover:underline"
                                            to="/login"
                                        >
                                            Login Now
                                        </Link>
                                    </span>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Register;
