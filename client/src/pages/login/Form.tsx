import React, { useState } from "react";
import { Alert, AlertTitle, Box, Button, Link, Stack, Typography, TextField } from "@mui/material";
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

const contents = [
    { message: "New to Netflix? ", label: "Sign up now.", href: "#" },
    {
        message:
            "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
        label: "Learn more.",
        href: "#",
    },
];

const LowerForm = () => {
    const component = (
        <div style={{ marginTop: "40px", marginBottom: "50px" }}>
            {contents.map((content, index) => {
                const { message, label, href } = content;
                return (
                    <Typography key={index} component="div" variant="body1" gutterBottom>
                        {message}{" "}
                        <Link href={href} underline="none">
                            {label}
                        </Link>
                    </Typography>
                );
            })}
        </div>
    );

    return component;
};

export type FormBase = {
    username: string;
    password: string;
};

const Form: React.FC = () => {
    const blankForm: FormBase = {
        username: "",
        password: "",
    };

    const { data, modifiers } = useAuth()
    const { status: { error, isFetching } } = data;

    const [formInputs, setFormInputs] = useState<FormBase>(blankForm);
    const [isPending, setIsPending] = useState(false);

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

    const { username, password } = formInputs;

    /**
     * This is an amazing way to verify all elements within the
     * form has a value. This may be a little overkill for this
     * application, but I would like to have this in my back pocket
     * when I need it.
     *
     */
    const canSubmit = [username, password].every(Boolean);

    return (
        <Stack direction="column" alignItems="center" justifyContent="center">
            <Box component="form" sx={formStyles}>
                <Typography component="div" variant="h4" gutterBottom>
                    Sign In
                </Typography>
                {!!error && <Alert severity="error">
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
                    error={!!error}
                />

                <TextField
                    disabled={isPending}
                    fullWidth
                    id="password"
                    label="Password"
                    margin="normal"
                    name="password"
                    onChange={handleUserInput}
                    type="password"
                    value={password}
                    variant="filled"
                    error={!!error}
                />
                <Button
                    sx={{ marginTop: "25px", padding: "15px" }}
                    size="large"
                    fullWidth
                    color="secondary"
                    variant="contained"
                    disabled={!canSubmit || isPending}
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
                        "Sign In"
                    )}
                </Button>
                {/* TODO: Add a Remember Me checkbox and Need help link */}
                <LowerForm />
            </Box>
        </Stack>
    );
};

export default Form;
