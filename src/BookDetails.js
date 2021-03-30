import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BookDetails = () => {
    const {isbn} = useParams();
    const {data, error, isPending } = useFetch(`https://openlibrary.org/api/books?bibkeys=ISBN${isbn}&format=json&jscmd=data`);
    console.log('book', data);
    const book = data ? data[`ISBN${isbn}`] : null;
    return (
        <div className='book-details'>
            {isPending && <p>'Book Data is Loading...'</p>}
            {error && <p>'Sorry. Something went wrong.'</p>}
            <h2>{book ? book.title : 'Loading Book Title'}</h2>
            <div className='book-info'>
                <p>{`ISBN: ${isbn}`}</p>
                <p>{`Published: ${book ? book?.publish_date : 'Loading'}`}</p>
                <p>{`Pages: ${book ? book?.number_of_pages : 'Loading'}`}</p>
                <p>{`Publishers: ${book ? book?.publishers?.map((publisher, index, publisers) => {
                    return (publisher.name + (index < publisers.length - 1 ? ', ' : ''));
                }) : 'Loading'}`}</p>
            </div>
            <div className='bookCover'>
                <img src={book?.cover?.medium} alt={`Cover for ${book?.title}`}/>
            </div>
        </div>
    );
}
 
export default BookDetails;