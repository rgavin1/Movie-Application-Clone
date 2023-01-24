import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Links from "../../../components/Links";
import Information from "../../../components/Information";
import { Container } from "@mui/material";
import { InternalHero } from "../../../layouts/hero";
import movieServices from "../../../services/movies";

const SingleFlim: React.FC = () => {
    const { id } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await movieServices.getMovieById(id)
                setShow(response)
            } catch (error) {
                // FIXME:
                console.log('error', error)
            }
        })()
    }, [id]);

    return (
        <div id="movie-details">
            <InternalHero mediaType="movie" searchedProgram={show} />
            <Container>
                <Links item={show} />
                <Information item={show} media="movie" />
                {/* <CastSlider text="Cast" cast={cast} /> */}
            </Container>
        </div>
    );
};

export default SingleFlim;