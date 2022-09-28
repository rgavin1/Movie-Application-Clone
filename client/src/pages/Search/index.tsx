import React, { useState, useEffect } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, TextField } from "@mui/material";
import debounce from "lodash.debounce"

import searchService from '../../services/search';
import { useFeature } from '../../hooks';
import { Program } from '../../utils/types';

import ItemsList from './ImageList'

const Search: React.FC = () => {
    const { featureList } = useFeature("movie")

    const [list, setList] = useState<Program[]>();
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const searchItemByTerm = async (term: string) => {
            setLoading(true)
            if (term !== "") {
                const results = await searchService.searchByQuery(searchTerm);
                setList(results);
                setTimeout(() => {
                    setLoading(false)
                }, 800)
                return;
            }
            setList(featureList)
            setTimeout(() => {
                setLoading(false)
            }, 800)
        }
        searchItemByTerm(searchTerm)
    }, [searchTerm, featureList])

    /**
     * So I'm cheap, this debounce function should wait 800ms 
     * between ketstrokes. This will reduce the number of request 
     * to the search endpoint.
     */
    const debounceHandler = debounce((query: string) => {
        setSearchTerm(query)
    }, 800)

    return <Box id="search-page" sx={{ minHeight: "100vh" }}>
        <Container>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} p={4}>
                <FontAwesomeIcon icon={faSearch} />
                <TextField id="input-with-sx" fullWidth label="Search for a movie, tv show, person......" variant="outlined" color="info"
                    focused sx={{ input: { color: '#fff' } }} onChange={(e) => debounceHandler(e.target.value)} />
            </Box>
            {list && <ItemsList list={list} loading={loading} />}
        </Container>
    </Box>
}

export default Search;