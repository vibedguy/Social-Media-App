import { Routes, Route } from "react-router-dom";
import { Home, Signup, Signin, Explore, Bookmarks, Notifications, Profile } from "../pages";
import { Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { useSelector } from "react-redux";
import Mockman from "mockman-js";
import { Post } from "../component";

export const NavRoutes = () => {

    const {
        auth: { token }
    } = useSelector(state => state);

    return (
        <Routes>

            <Route path={"/mock"} element={<Mockman />} />

            {token ? (
                <>
                    <Route path="/" element={<Navigate to="/home" replace />} />

                    <Route path="/signup" element={<Navigate to="/home" replace />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </>
            )}

            <Route element={<PrivateRoutes />}>
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/post/:postId" element={<Post />} />
            </Route>
            <Route path="*" element={<h2> OOPS! Page Not Found</h2>} />
        </Routes>
    )
};