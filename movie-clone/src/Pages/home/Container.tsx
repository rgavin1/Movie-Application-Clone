import React from 'react';

import '../../assets/styles/Main.css';

import { Hero, Footer } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';

import { feature } from "../../utils/types";


const Main: React.FC<{
    feature: feature | {};
    trending: feature[] | [];
}> = ({ feature, trending }) => {
    return <div className="main">
        <Hero feature={feature} />
        <div className="main__trends">
            <ImageSlider text="Trending Movies" genre="movie" trending={trending} />
            <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} />
        </div>
        <Footer />
    </div>
}

export default Main;