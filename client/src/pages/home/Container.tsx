import React from 'react';

import '../../assets/styles/Main.css';

import { Hero, Footer } from '../../../../old-client/src/layouts'
import ImageSlider from '../../../../old-client/src/components/ImageSlider';

import { feature } from "../../../../old-client/src/utils/types";


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