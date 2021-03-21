import React, { useState, useEffect } from 'react';
import '../../Assets/styles/Pages/Search.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('dotenv').config();

const Item = ({ item }) => {
    return  <div>
                <img className="search_image" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`${item.title}`}  />
                <div className="search_imagetitle">{item.title}</div>
            </div>
}

const ItemsList = ({ list }) => {
        return  <ul className="search_results">
                    { list.map((item) => {
                        return <li className="search_resultsitem"><Item item={item} /></li>
                    }) }
                </ul>
}

const Search = () => {
    const [ input, setInput ] = useState('');
    const [ list, setList ] = useState([]);
    const [ search, setSearch ] = useState(false);


    useEffect(() => {
        fetchQuery(input);
    }, [search])

    function fetchQuery(query){
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB}&language=en-US&query=${query ? query : ''}&include_adult=false`)
        .then(res => res.json())
        .then((items) => {
            console.log(items);
            setList(items.results);
            setSearch(false);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    function handleChange(e){
        setInput(e.currentTarget.value);
        setSearch(true);
    }

    return  <div className="search">
                <form className="search__queryform">
                    <input className="search__input" type="text" onChange={handleChange} value={input} placeholder="Search for a movie, tv show, person......" />
                    <span className="search__icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </form>
                { list && <ItemsList list={list} />}
            </div>
}

export default Search;