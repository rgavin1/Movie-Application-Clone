import React, { useEffect, useState } from 'react';
import { Container } from "@mui/material";
import { useParams } from 'react-router';
import Information from '../../../components/Information';
import Links from '../../../components/Links';
import { CastSlider } from '../../../components';
import televisionServices from '../../../services/television';
import { ShowDetailsRawResponse } from '../../../utils/types';
import { useCast, useTrendingShows } from '../../../hooks';
import ImageSlider from '../../../components/ImageSlider';
import { InternalHero } from '../../../layouts/hero';

const ShowDetails: React.FC = () => {
    const { id } = useParams();
    const { data: cast } = useCast(id);
    const { data: trendingShows } = useTrendingShows();

    const [data, setData] = useState<ShowDetailsRawResponse>();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true)
                const response = await televisionServices.getShowDetailsById(id)
                setData(response as ShowDetailsRawResponse)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false)
            }
        })();
    }, [id]);

    return <div className="tvshow-details">
        <InternalHero mediaType="tv" searchedProgram={data} />
        <Container>
            <Links item={data} />
            <Information item={data} media="tv" />
            <CastSlider text="Series Cast" teamMembers={cast} />
            <ImageSlider text="Trending Shows" programs={trendingShows} />
            {/* TODO: ADD Recommendations Slider */}
            {/*    <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} /> */}
        </Container>
    </div>
}

export default ShowDetails;