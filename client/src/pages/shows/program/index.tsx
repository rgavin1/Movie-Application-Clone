import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Hero } from "../../../layouts";
import Information from "../../../components/Information";
import Links from "../../../components/Links";
import { useShowDetails } from "../../../hooks";

const ShowDetails: React.FC = () => {
    const { id } = useParams();
    const { data: show } = useShowDetails(id);

    return (
        <div id="television-show-details">
            <Hero mediaType="tv" />
            <h1 style={{ color: "white" }}>Here</h1>
            <Links item={show} />
            <Information item={show} media="tv" />
            {/* <CastSlider text="Cast" cast={cast} /> */}
            {/* <ImageSlider text="Trending Movies" genre="tv" trending={trending} />
                <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} /> */}
        </div>
    );
};

export default ShowDetails;
