import { createContext, useReducer } from "react";

const initialState = {
    page: "",
    blogs: []
}

export const BlogContext = createContext({
    state: {
        page: "",
        blogs: []
    },
    dispatch: () => { }
});

const blogReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_PAGE":
            return { ...state, page: action.payload };
        case "ADD_BLOG":
            return { ...state, blogs: [...state.blogs, action.payload] }
        case "DELETE_POST":
            return { ...state, blogs: [...state.blogs.filter(item => item.id !== action.payload)] }
        default:
            return state;
    }
}

const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, initialState);
    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;