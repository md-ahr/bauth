import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Username from "./components/Username";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Username />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/recovery",
        element: <Recovery />,
    },
    {
        path: "/reset",
        element: <Reset />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
