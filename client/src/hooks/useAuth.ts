import { useState } from 'react'
import authenticationService from '../services/authentication';
import { Credentials } from '../utils/types';

const useAuth = () => {
    const initialState = { username: "", password: "" }

    const [error, setError] = useState(false);
    const [credentials, setCredentials] = useState<Credentials>(initialState);
    const [isFetching, setIsFetching] = useState(false);

    const userLogin = (creds: Credentials) => {
        if (!!creds) {
            (async () => {
                setIsFetching(true);
                setError(false);
                try {
                    const response = await authenticationService.login(creds);
                    setCredentials(response as any)
                } catch (e: any) {
                    setError(true)
                }
                setIsFetching(false);
            })()
        }
    }

    const data = {
        credentials,
        status: {
            isFetching,
            success: !!credentials,
            error
        }
    }

    const modifiers = {
        userLogin
    }

    return { data, modifiers }
}

export default useAuth