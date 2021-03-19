import React from 'react';
// Components
import Hero from '../Hero';

import { useParams } from 'react-router';

const SingleTv = ({ shows }) => {
    const { id } = useParams();
    return  <div className="singletv">
                <Hero feature={shows.find((element) => element.id === id)} />
                <h1>SingleTv - {id}</h1>
            </div>
}

export default SingleTv;