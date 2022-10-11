/**
 * TODO:
 *
 * - [x]: Logo
 * - [x]: Add Background Image
 * - [x]: Create Form Handlers
 * - [ ]: Set-up Login endpoint
 * - [ ]: Authentication
 * - [ ]: Errors:
 *      - [x]: No Password or Username
 *      - [ ]: Wrong combination
 *      - [ ]: Server error
 * - [ ]: Create Sign Up page
 * - [ ]: Link to Sign Up page
 * - [ ]: Add reCAPTCHA
 * - [ ]: Unit Tests
 */
import React from "react";
import { Typography, Stack } from "@mui/material";

import Form from "./Form";
import { NETFLIX_BG_URL } from "./assets/images";

const pageStyles = {
  height: "100vh",
  background: "#0000006b",
  backgroundImage: `url(${NETFLIX_BG_URL})`,
  backgroundBlendMode: "overlay",
};

const Logo = () => {
  const title = (
    <Typography
      sx={{ textTransform: "uppercase", color: "#fff" }}
      padding="40px"
      component="div"
      variant="h4"
      gutterBottom
    >
      NeatFlix
    </Typography>
  );

  return title;
};

const Login: React.FC = () => {
  const page = (
    <Stack id="login-page" style={pageStyles}>
      <Logo />
      <Form />
    </Stack>
  );

  return page;
};

export default Login;
