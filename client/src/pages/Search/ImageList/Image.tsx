import { Skeleton } from "@mui/material";
import { Program } from "../../../utils/types";

const Image: React.FC<{ item: Program; loading: boolean }> = ({ item, loading }) => {
    let image;

    if (item.poster_path && !loading) {
        image = <img width="100%" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
    }

    if (item.profile_path && !loading) {
        image = <img width="100%" src={`https://image.tmdb.org/t/p/h632${item.profile_path}`} alt={item.name} />
    }

    if (loading) {
        image = <Skeleton variant="rectangular" width="100%"
            height={300} sx={{ backgroundColor: '#3a3a3a' }} animation="wave" />
    }

    return <>{image}</>
}

export default Image