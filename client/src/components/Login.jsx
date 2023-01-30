import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { emailValidate } from "../helpers/validate";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: emailValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
        },
    });

    return (
        <div className="container mx-auto">
            <Toaster position="top-center" reverseOrder="false"></Toaster>
            <div className="flex justify-center items-center h-screen">
                <div className="border-4 border-gray-50 bg-[#ffffff8c] w-[60%] sm:w-[50%] lg:w-[40%] xl:w-[30%] rounded-3xl py-12 md:py-16 xl:py-20 px-0 xl:px-7 min-w-max backdrop-blur-[8px] shadow-[0_4px_30px_#4747470b]">
                    <div className="title flex flex-col items-center">
                        <h4 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                            Welcome Back!
                        </h4>
                        <span className="py-4 text-md md:text-lg xl:text-xl w-2/3 text-center text-gray-500">
                            Explore more by connecting with us.
                        </span>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img
                                src={avatar}
                                className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg"
                                alt="avatar"
                            />
                        </div>
                        <div className="mt-4 textbox flex flex-col items-center gap-6">
                            <input
                                type="email"
                                className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                                placeholder="Email"
                                {...formik.getFieldProps("email")}
                            />
                            <button
                                className="order bg-blue-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-blue-600 transition duration-300 ease"
                                type="submit"
                            >
                                Let's Go
                            </button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">
                                Not a Member?{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    to="/register"
                                >
                                    Register Now
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
