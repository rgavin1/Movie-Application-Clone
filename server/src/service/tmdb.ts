import axios from "axios";
import { BASE_URL } from "../contants";

require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});
