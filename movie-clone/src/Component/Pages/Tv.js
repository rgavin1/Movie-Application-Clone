import React from 'react';
import '../../Assets/styles/Pages/Tv.css';
import Hero from '../Hero';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

const Tv = () => {
    return  <div className="tv">
                <Hero />
                    <div className="tv__trends">
                        <ImageSlider text="Trending Tv Shows" />
                        <ImageSlider text="Related Tv Shows" />
                    </div>
                <Footer />
            </div>
}

export default Tv;