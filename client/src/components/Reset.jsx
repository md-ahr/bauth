import { Formik, Form, Field } from "formik";
import { MatchPasswordSchema } from "../helpers/validate";

const Reset = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="border-4 border-gray-50 bg-[#ffffff8c] w-[60%] sm:w-[50%] lg:w-[40%] xl:w-[30%] rounded-3xl py-12 md:py-16 xl:py-20 px-0 xl:px-7 min-w-max backdrop-blur-[8px] shadow-[0_4px_30px_#4747470b]">
                    <div className="title flex flex-col items-center">
                        <h4 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                            Reset Password
                        </h4>
                        <span className="py-4 text-md md:text-lg xl:text-xl w-2/3 text-center text-gray-500">
                            Enter new password.
                        </span>
                    </div>

                    <Formik
                        initialValues={{
                            password: "",
                            confirmPassword: "",
                        }}
                        validationSchema={MatchPasswordSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="mt-4 textbox flex flex-col items-center">
                                    <div className="w-full text-center">
                                        <Field
                                            type="password"
                                            name="password"
                                            className={`mt-1 px-5 py-4 border-0 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none ${
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
                                    <div className="mt-4 w-full text-center">
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            className={`mt-1 px-5 py-4 border-0 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none ${
                                                errors.confirmPassword &&
                                                touched.confirmPassword
                                                    ? "invalid"
                                                    : ""
                                            }`}
                                            placeholder="Confirm Password"
                                        />
                                        {errors.confirmPassword &&
                                        touched.confirmPassword ? (
                                            <div className="mt-2 text-[13px] text-red-600">
                                                {errors.confirmPassword}
                                            </div>
                                        ) : null}
                                    </div>
                                    <button
                                        className="mt-6 bg-blue-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-blue-600 transition duration-300 ease"
                                        type="submit"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Reset;
