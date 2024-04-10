import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogItem from "./BlogItem";

const Home = () => {
    const { state } = useContext(BlogContext);
    return (
        <main className="max-w-3xl mx-auto mt-6">
            {!state.blogs.length && <p className="text-gray-700 text-center font-bold">No blog posts available</p>}
            {state.blogs.length > 0 && (
                <div className="grid gap-4">
                    {state.blogs.map(item => (
                        <BlogItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            date={item.date}
                            content={item.content}
                        />
                    ))}
                </div>
            )}
        </main>
    );
};

export default Home;