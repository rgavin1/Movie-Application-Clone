import React from 'react'
import { SkeletonText1 } from '../../../components/skeletons';
import { useTelevisionShowDetails } from '../../../hooks';
import { IMAGE_SIZE_WIDTH_500_LOGO } from '../../../utils/helpers';

// TODO: Create the list of networks
const Network: React.FC<{ tvId?: number; loading: boolean }> = ({ tvId = "213", loading }) => {
    const { details } = useTelevisionShowDetails(tvId as string);
    const response = details?.networks[0];
    const img = `${IMAGE_SIZE_WIDTH_500_LOGO}${response?.logo_path}`;
    return <>{loading ? <SkeletonText1 /> : <img src={img} width="80px" alt={response?.name} />}</>
};

export default Network