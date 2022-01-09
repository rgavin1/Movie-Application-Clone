import React ,{ useState, useEffect } from 'react';
import { useParams } from 'react-router';
// Styles
import '../../../assets/styles/Pages//SingleFilm.css';
// Components
import Hero from '../../../layout/Hero'; 
import Links from '../../../component/Links';
import Information from '../../../component/Information';

const SingleFlim = () => {
    const { id } = useParams();
    const [ show, setShow ] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);     
        const fetchShow = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then((items) => {
                setShow(items);
                // fetchCast();
            })
            .catch((err) => {
                console.log(err);
            })
        }
        fetchShow();
    }, [id]);

    
    return  <div className="singleFlim">
                <Hero feature={show} />
                <Links item={show} />
                <Information item={show} media="movie"/>
                {/* <CastSlider text="Cast" cast={cast} /> */}
            </div>
}

export default SingleFlim;