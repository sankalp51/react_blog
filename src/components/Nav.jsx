import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Nav = () => {
    const { dispatch } = useContext(BlogContext);
    return (
        <nav>
            <ul className="flex space-x-4">
                <li
                    onClick={() => { dispatch({ type: "CHANGE_PAGE", payload: "home" }) }}
                    className="text-white hover:underline transition duration-300 ease-in-out hover:cursor-pointer">
                    Home
                </li>
                <li
                    onClick={() => { dispatch({ type: "CHANGE_PAGE", payload: "add_post" }) }}
                    className="text-white hover:underline transition duration-300 ease-in-out hover:cursor-pointer">
                    Add Post
                </li>
                <li
                    onClick={() => { dispatch({ type: "CHANGE_PAGE", payload: "about_us" }) }}
                    className="text-white hover:underline transition duration-300 ease-in-out hover:cursor-pointer">
                    About Us
                </li>
            </ul>
        </nav>
    );
};

export default Nav;