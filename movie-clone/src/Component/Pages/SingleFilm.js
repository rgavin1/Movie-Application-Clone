import React from 'react';
// Components
import Hero from '../Hero'; 
import { useParams } from 'react-router';

const SingleFlim = ({ films }) => {
    const { id } = useParams();
    return  <div className="singleFlim">
                <Hero feature={films.find((element) => element.id === id)} />
                <h1>SingleFlim - {id}</h1> 
            </div>
}

export default SingleFlim;