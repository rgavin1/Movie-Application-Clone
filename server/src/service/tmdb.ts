import axios from "axios";
import { BASE_URL as baseURL } from "../contants";

require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN
const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` }

export const axiosInstance = axios.create({
    baseURL,
    headers
});
