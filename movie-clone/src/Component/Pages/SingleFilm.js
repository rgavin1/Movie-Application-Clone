import React ,{ useEffect } from 'react';
import { useParams } from 'react-router';
// Components
import Hero from '../Hero'; 

const SingleFlim = ({ films }) => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    return  <div className="singleFlim">
                <Hero feature={films.find((element) => element.id === id)} />
                <h1>SingleFlim - {id}</h1> 
            </div>
}

export default SingleFlim;