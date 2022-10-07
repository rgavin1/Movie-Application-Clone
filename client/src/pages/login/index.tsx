/**
 * TODO:
 * 
 * - [ ]: Logo
 * - [ ]: Add Background Image
 * - [ ]: Link to Sign Up page
 * - [ ]: Add reCAPTCHA
 * - [ ]: Errors:
 *      - [ ]: No Password or Username
 *      - [ ]: Wrong combinatio
 *      - [ ]: Server error
 * - [ ]: Authentication
 * - [ ]: Unit Tests
 */
import React from "react";
import { Box, Button, Link, Stack, Typography, TextField } from "@mui/material";

const formStyles = {
    background: "#00000038",
    borderRadius: "10px",
    margin: "auto",
    padding: "50px",
    width: "80%",
    maxWidth: "350px",
};
const pageStyles = {
    height: "100vh"
};

const LowerForm = () => {
    return (
        <div style={{ marginTop: "40px", marginBottom: "50px" }}>
            <Typography component="div" variant="body1" gutterBottom>
                New to Netflix?{" "}
                <Link href="#" underline="none">
                    Sign up now.
                </Link>
            </Typography>
            <Typography component="div" variant="body1" gutterBottom>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                <Link href="#" underline="none">
                    Learn more.
                </Link>
            </Typography>
        </div>
    );
};

const Login: React.FC = () => {
    return (
        <div id="login-page" style={pageStyles}>
            <Typography sx={{ textTransform: "uppercase" }} component="div" variant="h4" gutterBottom>
                NeatFlix
            </Typography>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box component="form" sx={formStyles}>
                    <Typography component="div" variant="h4" gutterBottom>
                        Sign In
                    </Typography>
                    <TextField
                        id="outlined-required"
                        label="Email or phone number"
                        defaultValue="Hello World"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="outlined-required"
                        label="Password"
                        defaultValue="Hello World"
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        sx={{ marginTop: "25px", padding: "15px" }}
                        size="large"
                        fullWidth
                        color="secondary"
                        variant="contained"
                    >
                        Sign In
                    </Button>
                    {/* TODO: Add a Remember Me checkbox and Need help link */}
                    <LowerForm />
                </Box>
            </Stack>
        </div>
    );
};

export default Login;
