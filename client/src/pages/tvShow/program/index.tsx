import React, { useEffect, useState } from 'react';
import { Container } from "@mui/material";
import { useParams } from 'react-router';
import Information from '../../../components/Information';
import Links from '../../../components/Links';
import { Hero } from '../../../layouts';
import televisionServices from '../../../services/television';
import { ShowDetailsRawResponse } from '../../../utils/types';

const ShowDetails: React.FC = () => {
    const { id } = useParams();
    const [data, setData] = useState<ShowDetailsRawResponse>();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true)
                const results = await televisionServices.getShowDetailsById(id)
                setData(results)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false)
            }
        })();
    }, [id]);

    return <div className="tvshow-details">
        <Hero mediaType="tv" searchedProgram={data} />
        <Container>
            <Links item={data} />
            <Information item={data} media="tv" />
            {/* <CastSlider text="Cast" cast={cast} /> */}
            {/* <ImageSlider text="Trending Movies" genre="tv" trending={trending} />
                <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} /> */}
        </Container>
    </div>
}

export default ShowDetails;