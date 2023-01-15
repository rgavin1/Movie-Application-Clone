import axios from "axios";
import { urls } from "../contants";
require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN
const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` }

export const axiosInstance = axios.create({
    baseURL: urls.BASE_URL,
    headers
});
