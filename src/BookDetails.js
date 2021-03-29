import useFetch from './useFetch';

const BookDetails = () => {
    const {data : book, error, isPending } = useFetch('https://openlibrary.org/api/books?bibkeys=ISBN:0385472579&format=json');
    console.log(book);
    return (
        <div className='book-details'>
            <p>
                {isPending && 'Book Data is Loading...'}
                {error && 'Sorry. Something went wrong.' && error }
            </p>
        </div>
    );
}
 
export default BookDetails;