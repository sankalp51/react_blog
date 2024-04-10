import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { format, parseISO } from 'date-fns';

const BlogItem = ({ name, date, content, id }) => {

    const formatDate = (date) => {
        const parseDate = parseISO(date);
        const formattedDate = format(parseDate, "do MMMM yyyy", { awareOfUnicodeTokens: true });
        return formattedDate;
    }
    const { dispatch } = useContext(BlogContext);
    return (
        <article className="bg-white p-4 flex justify-between items-center border border-gray-300">
            <div>
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-500 mb-2">{formatDate(date)}</p>
                <p className="text-gray-700">{content}</p>
            </div>
            <div className="text-red-500 hover:cursor-pointer"
                onClick={() => dispatch({ type: "DELETE_POST", payload: id })}>
                <DeleteIcon />
            </div>
        </article>
    );
};

export default BlogItem;
