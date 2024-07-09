import classes from './SearchBar.module.css'
import { useState } from 'react';

interface SearchBarProps {
    searchFunction: (prop: string) => void
}

function SearchBar(props: SearchBarProps) {

    const [search, setSearch] = useState('')

    const handleSearch = async (event: string) => {
        setSearch(event)
        props.searchFunction(search)
    }

    return (
        <>
            <div className="searchBarContainer">
                <input onChange={(e) => { handleSearch(e.target.value) }} placeholder='Search...' className={classes.searchBarInput} type='text' />
            </div>
        </>
    );
}

export default SearchBar;