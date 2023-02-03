import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import profile from "../assets/profile.png";
import convertToBase64 from "../helpers/convert";

const Profile = () => {
    const [file, setFile] = useState("");

    const onUpload = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    };

    return (
        <div className="container my-4 sm:my-0 mx-auto">
            <div className="flex justify-center items-center min-h-screen">
                <div className="border-4 border-gray-50 bg-[#ffffff8c] w-1/3 rounded-3xl py-8 px-7 min-w-max backdrop-blur-[8px] shadow-[0_4px_30px_#4747470b]">
                    <div className="title flex flex-col items-center">
                        <h4 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                            My Profile
                        </h4>
                        <span className="py-4 text-md md:text-lg xl:text-xl w-2/3 text-center text-gray-500">
                            You can update all of your informations.
                        </span>
                    </div>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            mobile: "",
                            address: "",
                        }}
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
                                    <div className="w-auto text-center">
                                        <label htmlFor="profilePic">
                                            <img
                                                src={file || profile}
                                                alt="avatar"
                                                className="mx-auto w-[140px] border border-slate-300 rounded-full cursor-pointer"
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
                                </div>
                                <div className="mt-6 flex flex-col items-center">
                                    <div className="flex flex-col sm:flex-row justify-between gap-8">
                                        <div className="w-full text-center">
                                            <Field
                                                type="text"
                                                name="firstName"
                                                className={`border-0 px-5 py-4 rounded-xl shadow-sm text-lg focus:outline-none`}
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="w-full text-center">
                                            <Field
                                                type="text"
                                                name="lastName"
                                                className={`border-0 px-5 py-4 rounded-xl shadow-sm text-lg focus:outline-none`}
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-col sm:flex-row justify-between gap-8">
                                        <div className="w-full text-center">
                                            <Field
                                                type="number"
                                                name="mobile"
                                                className={`border-0 px-5 py-4 rounded-xl shadow-sm text-lg focus:outline-none`}
                                                placeholder="Mobile"
                                            />
                                        </div>
                                        <div className="w-full text-center">
                                            <Field
                                                type="email"
                                                name="email"
                                                className={`border-0 px-5 py-4 rounded-xl shadow-sm text-lg focus:outline-none`}
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 w-full text-center">
                                        <Field
                                            type="text"
                                            name="address"
                                            className={`border-0 px-5 py-4 w-auto sm:w-full rounded-xl shadow-sm text-lg focus:outline-none`}
                                            placeholder="Address"
                                        />
                                    </div>
                                    <button
                                        className="mt-6 bg-blue-500 w-full py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-blue-600 transition duration-300 ease"
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                    <div className="pt-4 text-center">
                                        <span className="text-gray-500">
                                            Come back later?{" "}
                                            <Link
                                                className="text-blue-500 hover:underline"
                                                to="/login"
                                            >
                                                Logout
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Profile;
