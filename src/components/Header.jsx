import Nav from "./Nav";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Header = () => {
  const { dispatch } = useContext(BlogContext);
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-600 px-4 py-6 md:px-8 md:py-8 flex items-center justify-between">
      <h1 onClick={() => dispatch({ type: "CHANGE_PAGE", payload: "home" })} className="text-3xl font-bold text-white hover:cursor-pointer">Secret Blogs</h1>
      <Nav />
    </header>
  );
};

export default Header;