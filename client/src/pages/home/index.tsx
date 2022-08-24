import React from 'react';
import { Container } from '@mui/material';


import { Hero, Footer } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';

import { Payload } from "../../utils/types";


const Home: React.FC<{
    feature: Payload | {};
    trending: Payload[] | [];
}> = ({ feature, trending }) => {
    return <div className="main">
        <Hero feature={feature} />
        <Container>
            {/* <ImageSlider text="Trending Movies" genre="movie" trending={trending} override={undefined} /> */}
            {/* <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} override={undefined} /> */}
        </Container>
        <Footer />
    </div>
}

export default Home;