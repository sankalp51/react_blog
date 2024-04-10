import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { v4 as uuid } from 'uuid';

const Form = () => {
    const { dispatch } = useContext(BlogContext);

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        dispatch({ type: "ADD_BLOG", payload: { ...data, id: uuid() } });
        dispatch({ type: "CHANGE_PAGE", payload: "home" });
    }
    return (
        <div className="max-w-md mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input required type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date:</label>
                    <input required type="date" id="date" name="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content:</label>
                    <textarea required id="content" name="content" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
};

export default Form;
