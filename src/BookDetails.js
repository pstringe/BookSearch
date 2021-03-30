import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Search from './Search';
import {Link} from 'react-router-dom';

const BookDetails = () => {
    const {isbn} = useParams();
    const {data, error, isPending } = useFetch(`https://openlibrary.org/api/books?bibkeys=ISBN${isbn}&format=json&jscmd=data`);
    console.log('book', data);
    const book = data ? data[`ISBN${isbn}`] : null;
    return (
        <div className='book-details'>
            {isPending && <p>'Book Data is Loading...'</p>}
            {error && <p>'Sorry. Something went wrong.'</p>}
            <div>
                <h2>{book ? book.title : 'Loading Book Title'}</h2>
            </div>
            <div className='book-info'>
                <div className='text'>
                    <p>{`ISBN: ${isbn}`}</p>
                    <p>{`Published: ${book ? book?.publish_date : 'Loading'}`}</p>
                    <p>{`Pages: ${book ? book?.number_of_pages : 'Loading'}`}</p>
                    <p>{`Publishers: ${book ? book?.publishers?.map((publisher, index, publisers) => {
                        return (publisher.name + (index < publisers.length - 1 ? ', ' : ''));
                    }) : 'Loading'}`}</p>
                </div>
                <div className='book-cover'>
                    <img src={book?.cover?.medium} alt={`Cover for: ${book?.title}`}/>
                </div>
            </div>
            <Link to='/'><button>Search Another ISBN</button></Link>
        </div>
    );
}
 
export default BookDetails;