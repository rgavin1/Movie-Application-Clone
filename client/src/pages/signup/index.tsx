import React from "react";
import { Button, Typography, Stack } from "@mui/material";

import Form from "./Form";
import { NETFLIX_BG_URL } from "../../assets/images/images";


const pageStyles = {
    minHeight: "100vh",
    background: "#0000006b",
    backgroundImage: `url(${NETFLIX_BG_URL})`,
    backgroundBlendMode: "overlay",
};

const Logo = () => {
    const title =
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginX: "35px" }}>
            <Typography
                sx={{ textTransform: "uppercase", color: "#fff" }}
                padding="40px"
                component="div"
                variant="h4"
                gutterBottom
            >
                NeatFlix
            </Typography>
            <Button variant="contained" color="secondary" size="large">Login</Button>
        </Stack>

    return title;
};

const Signup: React.FC = () => {
    const page = (
        <Stack id="signup-page" style={pageStyles}>
            <Logo />
            <Form />
        </Stack>
    );

    return page;
};

export default Signup;
