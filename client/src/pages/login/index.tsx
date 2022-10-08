/**
 * TODO:
 *
 * - [x]: Logo
 * - [x]: Add Background Image
 * - [x]: Create Form Handlers
 * - [ ]: Errors:
 *      - [ ]: No Password or Username
 *      - [ ]: Wrong combinatio
 *      - [ ]: Server error
 * - [ ]: Add reCAPTCHA
 * - [ ]: Authentication
 * - [ ]: Link to Sign Up page
 * - [ ]: Unit Tests
 */
import React from "react";
import { Typography } from "@mui/material";

import Form from "./Form";

const pageStyles = {
  height: "100vh",
  background: "#0000006b",
  backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/0a1bb975-77bd-4c7e-8524-7fb05c9dd015/US-en-20221003-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
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
    <div id="login-page" style={pageStyles}>
      <Logo />
      <Form />
    </div>
  );

  return page;
};

export default Login;
