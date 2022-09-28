import { Skeleton } from "@mui/material";
import { IMAGE_SIZE_WIDTH_500, IMAGE_SIZE_HEIGHT_632 } from "../../../utils/helpers";
import { Program } from "../../../utils/types";

const Image: React.FC<{ item: Program; loading: boolean }> = ({ item, loading }) => {
    const { poster_path, profile_path, name, title } = item;

    let image;

    if (poster_path && !loading) {
        image = <img width="100%" src={IMAGE_SIZE_WIDTH_500 + poster_path} alt={title} />
    }

    if (profile_path && !loading) {
        image = <img width="100%" src={IMAGE_SIZE_HEIGHT_632 + profile_path} alt={name} />
    }

    if (loading) {
        image = <Skeleton variant="rectangular" width="100%"
            height="30vmax" sx={{ backgroundColor: '#3a3a3a' }} animation="wave" />
    }

    return <>{image}</>
}

export default Image