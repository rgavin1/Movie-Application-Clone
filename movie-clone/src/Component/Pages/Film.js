import React from 'react';
import '../../Assets/styles/Pages/Film.css';
import Hero from '../Hero';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
const Film = () => {
    return  <div className="film">
                <Hero />
                    <div className="film__trends">
                        <ImageSlider text="Trending Movies" />
                        <ImageSlider text="Related Movies" />
                    </div>
                <Footer />
            </div>
}

export default Film;