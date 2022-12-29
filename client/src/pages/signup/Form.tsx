import React, { useState } from "react";
import { Alert, AlertTitle, Box, Button, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useAuth from "../../hooks/useAuth";

const formStyles = {
    background: "#fff",
    borderRadius: "10px",
    color: "#000000cc",
    margin: "auto",
    padding: "50px",
    width: "80%",
    maxWidth: "350px",
};

export type FormBase = {
    username: string;
    password: string;
    passwordConfirm: string;
    email: string;
};

const Form: React.FC = () => {
    const blankForm: FormBase = {
        username: "",
        password: "",
        passwordConfirm: "",
        email: "",
    };

    const { data, modifiers } = useAuth()
    const { status: { error, isFetching } } = data;

    const [formInputs, setFormInputs] = useState<FormBase>(blankForm);
    const [isPending, setIsPending] = useState(false);

    const handleClearForm = () => setFormInputs(blankForm);

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };

    const handleSubmission = () => {
        setIsPending(true)
        setTimeout(() => {
            modifiers.userLogin(formInputs)
            setIsPending(false)
        }, 3000);
    };

    const { username, password, passwordConfirm, email } = formInputs;

    /**
     * This is an amazing way to verify all elements within the
     * form has a value. This may be a little overkill for this
     * application, but I would like to have this in my back pocket
     * when I need it.
     *
     */
    const canSubmit = [username, password].every(Boolean);

    const enableButtons = !canSubmit || isPending

    return (
        <Stack direction="column" alignItems="center" justifyContent="center">
            <Box component="form" sx={formStyles}>
                <Typography component="div" variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <Typography component="div" variant="body2" gutterBottom>
                    Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
                </Typography>
                {error && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Wrong Username/Password combination
                </Alert>}
                <TextField
                    disabled={isPending}
                    fullWidth
                    id="username"
                    label="Username"
                    margin="normal"
                    name="username"
                    onChange={handleUserInput}
                    value={username}
                    variant="filled"
                    error={error}
                />

                <TextField
                    disabled={isPending}
                    fullWidth
                    id="password"
                    label="Password (4 characters minimum)"
                    margin="normal"
                    name="password"
                    onChange={handleUserInput}
                    type="password"
                    value={password}
                    variant="filled"
                    error={error}
                />
                <TextField
                    disabled={isPending}
                    fullWidth
                    id="passwordConfirm"
                    label="Password Confirm"
                    margin="normal"
                    name="passwordConfirm"
                    onChange={handleUserInput}
                    type="password"
                    value={passwordConfirm}
                    variant="filled"
                    error={error}
                />
                <TextField
                    disabled={isPending}
                    fullWidth
                    id="email"
                    label="Email"
                    margin="normal"
                    name="email"
                    onChange={handleUserInput}
                    type="email"
                    value={email}
                    variant="filled"
                    error={error}
                />
                <Typography component="div" variant="caption" gutterBottom>
                    By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="space-between" marginTop="15px">
                    <Button
                        size="large"
                        color="secondary"
                        variant="contained"
                        disabled={enableButtons}
                        onClick={handleSubmission}
                    >
                        {isPending ? (
                            /**
                             * This is causing an error in the console. It's obvi
                             * bad practice. FIXME: Make an actual button that doesn't
                             * cause errors :pray:
                             */
                            <LoadingButton loading>Submit</LoadingButton>
                        ) : (
                            "Sign Up"
                        )}
                    </Button>
                    <Button size="large" disabled={enableButtons} color="error" onClick={handleClearForm}>
                        Cancel
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Form;
