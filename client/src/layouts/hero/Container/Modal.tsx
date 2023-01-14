import React from 'react'
import { Grid, Button, Box, Modal } from '@mui/material';

import { SkeletonButton } from '../../../components/skeletons';

const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/";
const TEST_YT_ID = "nIvBBd8pU1s";
const modalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: '#000',
    border: '2px solid #000',
    boxShadow: 24,
};

const ModalContainer: React.FC<{ loading: boolean; }> = ({ loading }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <Grid item>
            {loading ? <SkeletonButton /> : <Button sx={{ marginTop: "15px" }} color="secondary" variant="contained" onClick={() => setIsModalOpen(!isModalOpen)}>Watch Trailer</Button>}
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(!isModalOpen)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyles}>
                    <iframe id="trailer-model" title="trailer-model" width="100%" height="500px" style={{ border: "none" }} src={`${YOUTUBE_BASE_URL + TEST_YT_ID}?autoplay=1`} />
                </Box>
            </Modal>
        </Grid>
    )
}

export default ModalContainer