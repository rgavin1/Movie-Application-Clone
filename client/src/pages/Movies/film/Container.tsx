import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Hero } from "../../../layouts";
import Links from "../../../../../client/src/components/Links";
import Information from "../../../../../client/src/components/Information";
import { Container } from "@mui/material";

const SingleFlim: React.FC = () => {
    const { id } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchShow = () => {
            fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            )
                .then((res) => res.json())
                .then((items) => {
                    setShow(items);
                    // fetchCast();
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchShow();
    }, [id]);

    return (
        <div id="single-movie">
            <Hero mediaType="movie" />
            <Links item={show} />
            <Information item={show} media="movie" />
            {/* <CastSlider text="Cast" cast={cast} /> */}
        </div>
    );
};

export default SingleFlim;