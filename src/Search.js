import {useState} from 'react';
import {Link} from 'react-router-dom';

const Search = () => {
    const [isbn, setISBN] = useState();
    console.log(isbn);

    return (
        <div className='search'>
            <h1> Book Search </h1>
            <form>
                <label>Search by ISBN:</label>
                <input value={isbn} onChange={(e)=>setISBN(e.target.value)}/>
                <Link to={`/book/:${isbn}`}><button>Find Book</button></Link>
            </form>
        </div>
    );
}
 
export default Search;