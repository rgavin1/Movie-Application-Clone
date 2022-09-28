import { Link } from 'react-router-dom';
import { Grid, Typography, Skeleton } from "@mui/material";
import { Program } from '../../../utils/types';

import Image from './Image'

const ImageList: React.FC<{ list: Program[]; loading: boolean }> = ({ list, loading }) => {
    return <Grid container spacing={2} xs={12}>
        {list.map((item: Program, id: number) => {
            return <Grid key={id} item xs={3}>
                <Link to={`${item.media_type}-profile/${item.id}`} style={{ textDecoration: "none" }}>
                    <Image item={item} loading={loading} />
                    {loading ? <Skeleton sx={{ backgroundColor: '#3a3a3a', fontSize: '1rem', marginTop: '15px' }} animation="wave" variant="text" /> : <Typography p={2} variant="subtitle1" textAlign="center" component="div" color="white">{item.title ? item.title : item.name}</Typography>}
                </Link>
            </Grid>
        })}
    </Grid>
}

export default ImageList