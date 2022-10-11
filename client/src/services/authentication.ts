import axios from "axios"
import { Credentials } from "../utils/types";

const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1`
const axiosInstance = axios.create({ baseURL: BASE_URL })

/**
 * ******************* Authentication *******************
 * 
 * - Dictionary Definition:
 * Authentication, in the form of a key. The lock on the 
 * door only grants access to someone with the correct key 
 * in much the same way that a system only grants access to 
 * users who have the correct credentials.
 * 
 * - Self Definition:
 * Authenticatio confirms the user is who they say they are.
 * 
 */

/**
 * 
 * @param credentials 
 * @returns 
 */
const login = async (credentials: Credentials) => {
    console.log('credentials', credentials)
    const request = await axiosInstance.post("/login", { params: { credentials } });
    console.log(request)
    return true
}

const logout = async (credentials: any) => {
    // call the backend to find the creds
    const request = await axiosInstance.get("/login");
    console.log(request)
    return true
}

const authenticationService = {
    login,
    logout
}

export default authenticationService