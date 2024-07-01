import './SearchBar.css'
import { useState } from 'react';

interface SearchBarProps {
    searchFunction: Function
}

function SearchBar(props: SearchBarProps) {

    const [search, setSearch] = useState('')

    return (
        <>
            <div className="searchBarContainer">
                <input onChange={(e) => { setSearch(e.target.value) }} placeholder='Search...' className='searchBarInput' type='text' />
                <button onClick={() => props.searchFunction(search)} className='searchBarButton'>Search</button>
            </div>
        </>
    );
}

export default SearchBar;