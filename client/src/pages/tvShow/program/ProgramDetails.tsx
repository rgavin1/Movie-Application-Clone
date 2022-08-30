import React from 'react';
import Networks from '../../../components/Networks';
import RunTime from '../../../components/RunTime';
import { List, ListItem, Stack, Typography } from "@mui/material";

const ListItemDetails: React.FC<{ list: any[] }> = ({ list }) => {
    return <ul>
        {list.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, id: React.Key | null | undefined) => {
            return <li style={{ textAlign: 'end', display: 'inline-block' }} key={id}>{item.name}</li>
        })}
    </ul>
}


const TVList: React.FC<{ details: any }> = ({ details }) => {
    return <List id="details">
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Creators</Typography><Typography variant="subtitle1" component="div" color="white">{details.created_by ? <ListItemDetails list={details.created_by} /> : '--'}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Run Time</Typography><Typography variant="subtitle1" component="div" color="white">{details.episode_run_time && <RunTime runtime={details.episode_run_time} />}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">First Aired</Typography><Typography variant="subtitle1" component="div" color="white">{details.first_air_date}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Last Aired</Typography><Typography variant="subtitle1" component="div" color="white">{details.last_air_date}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Genres</Typography><Typography variant="subtitle1" component="div" color="white">{details.genres && <ListItemDetails list={details.genres} />}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Languages</Typography><Typography variant="subtitle1" component="div" color="white">{details.spoken_languages && <ListItemDetails list={details.spoken_languages} />}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Networks</Typography><Typography variant="subtitle1" component="div" color="white">{details.networks && <Networks networks={details.networks} />}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">No. of Episodes</Typography><Typography variant="subtitle1" component="div" color="white">{details.number_of_episodes}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">No. of Seasons</Typography><Typography variant="subtitle1" component="div" color="white">{details.number_of_seasons}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Production Companies</Typography><Typography variant="subtitle1" component="div" color="white">{details.production_companies && <ListItemDetails list={details.production_companies} />}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Production Countries</Typography><Typography variant="subtitle1" component="div" color="white">{details.production_countries && <ListItemDetails list={details.production_countries} />}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Status</Typography><Typography variant="subtitle1" component="div" color="white">{details.status}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Tagline</Typography><Typography variant="subtitle1" component="div" color="white">{details.tagline ? details.tagline : '-'}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Type</Typography><Typography variant="subtitle1" component="div" color="white">{details.type}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Vote Avg</Typography><Typography variant="subtitle1" component="div" color="white">{details.vote_average}</Typography>
            </Stack>
        </ListItem>
        <ListItem>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="subtitle1" component="div" color="white">Vote Count</Typography><Typography variant="subtitle1" component="div" color="white">{details.vote_count}</Typography>
            </Stack>
        </ListItem>
    </List>
}

export default TVList;