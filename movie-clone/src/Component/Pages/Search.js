import React, { useState, useEffect } from 'react';
import '../../Assets/styles/Pages/Search.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

require('dotenv').config();


const GetImage = ({ item }) => {
    return  <>
                { item.poster_path 
                    ? <img className="search_image" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`${item.title}`}  />
                    : <img className="search_image" src={`https://image.tmdb.org/t/p/h632${item.profile_path}`} alt={`${item.name}`}  />
                }
            </>

}
const Item = ({ item }) => {
    return  <div>
                <div className="search__imagewrapper">
                    <GetImage item={item} />
                </div>
                <div className="search_imagetitle">{item.title ? item.title : item.name }</div>
            </div>
}

const ItemsList = ({ list }) => {
        return  <ul className="search_results">
                    { list.map((item, id) => {
                        return  <li key={id} className="search_resultsitem">
                                    <Link to={`${item.media_type}-profile/${item.id}`} ><Item item={item} /></Link>
                                </li>
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
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB}&language=en-US&query=${query}&include_adult=false`)
        .then(res => res.json())
        .then((items) => {
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