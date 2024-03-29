import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Container>
            <Typography color="white" variant="subtitle1" component="div" p={3}>
                Developed and Design By{" "}
                <a
                    title="LinkedIn Profile"
                    href="https://www.linkedin.com/in/ramsey-gavin/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Ramsey Gavin
                </a>{" "}
                Powered by{" "}
                <a
                    title="TMDB"
                    href="https://www.themoviedb.org/?language=en-US"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        style={{ width: "150px" }}
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
                        alt="The Movie Database Logo"
                    />
                </a>
            </Typography>
        </Container>
    );
};

export default Footer;
