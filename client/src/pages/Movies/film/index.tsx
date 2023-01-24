import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Links from "../../../components/Links";
import Information from "../../../components/Information";
import { Container } from "@mui/material";
import { InternalHero } from "../../../layouts/hero";

const SingleFlim: React.FC = () => {
    const { id } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        // const fetchShow = () => {
        //     fetch(
        //         `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
        //     )
        //         .then((res) => res.json())
        //         .then((items) => {
        //             setShow(items);
        //             // fetchCast();
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        // };
        // fetchShow();
    }, [id]);

    return (
        <div id="movie-details">
            <InternalHero mediaType="movie" />
            <Container>
                <Links item={show} />
                <Information item={show} media="movie" />
                {/* <CastSlider text="Cast" cast={cast} /> */}
            </Container>
        </div>
    );
};

export default SingleFlim;