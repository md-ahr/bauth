import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen gap-6">
                <div className="text-center border-4 border-gray-50 bg-[#ffffff8c] w-[90%] sm:w-[50%] lg:w-[40%] xl:w-[30%] rounded-3xl py-12 md:py-16 xl:py-20 px-0 xl:px-7 min-w-max backdrop-blur-[8px] shadow-[0_4px_30px_#4747470b]">
                    <p className="text-8xl">404</p>
                    <p className="mb-8 text-2xl">Page Not Found</p>
                    <Link
                        to="/profile"
                        className="mt-6 bg-blue-500 w-full px-8 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-blue-600 transition duration-300 ease"
                    >
                        Back To Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
