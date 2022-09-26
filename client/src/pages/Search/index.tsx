import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, TextField, Grid, Typography } from "@mui/material";
import searchService from '../../services/search';

const Image: React.FC<{ item: any }> = ({ item }) => {
    return <>
        {item.poster_path
            ? <img width="100%" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
            : <img width="100%" src={`https://image.tmdb.org/t/p/h632${item.profile_path}`} alt={item.name} />
        }
    </>

}

const ItemsList: React.FC<{ list: any }> = ({ list }) => {
    return <Grid container spacing={2} xs={12}>
        {list.map((item: any, id: number) => {
            return <Grid key={id} item xs={3}>
                <Link to={`${item.media_type}-profile/${item.id}`} style={{ textDecoration: "none" }}>
                    <Image item={item} />
                    <Typography p={2} variant="subtitle1" textAlign="center" component="div" color="white">{item.title ? item.title : item.name}</Typography>
                </Link>
            </Grid>
        })}
    </Grid>
}

const Search: React.FC = () => {
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const searchItemByTerm = async (term: string) => {
            if (term !== "") {
                const results = await searchService.searchByQuery(searchTerm);
                setList(results);
            }
        }

        searchItemByTerm(searchTerm)
    }, [searchTerm])

    const searchByTerm = (query: string) => setSearchTerm(query)

    return <Box id="search-page" sx={{ minHeight: "100vh" }}>
        <Container>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} p={4}>
                <FontAwesomeIcon icon={faSearch} />
                <TextField id="input-with-sx" fullWidth label="Search for a movie, tv show, person......" variant="outlined" color="info"
                    focused sx={{ input: { color: '#fff' } }} onChange={(e) => searchByTerm(e.target.value)} />
            </Box>
            {list && <ItemsList list={list} />}
        </Container>
    </Box>
}

export default Search;