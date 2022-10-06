"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const tv_1 = require("../mocks/tv");
const REACT_APP_TMBD_API_KEY = "API_KEY";
const router = express_1.default.Router();
const BASE_URL = "https://api.themoviedb.org/3";
const axiosInstance = axios_1.default.create({ baseURL: BASE_URL });
router.get('/top-rated', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockTrendingShowsResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockTrendingShowsResponse);
}));
router.get('/trending', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockTrendingShowsResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockTrendingShowsResponse);
}));
router.get('/popular', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockPopularTelevisionResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockPopularTelevisionResponse);
}));
router.get('/airing-today', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockAiringTodayResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockAiringTodayResponse);
}));
router.get('/on-air', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockOnAirResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockOnAirResponse);
}));
router.get('/similar/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockOnAirResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/${req.params.id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockOnAirResponse);
}));
router.get('/recommendations/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockOnAirResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/${req.params.id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockOnAirResponse);
}));
router.get('/details/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockTelevisionShowDetailsResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/${req.params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockTelevisionShowDetailsResponse);
}));
router.get('/credits/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tv_1.mockOnAirResponse) {
        try {
            const response = yield axios_1.default.get(`https://api.themoviedb.org/3/tv/${req.params.id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
            res.send(response);
        }
        catch (e) {
            res.status(404).send(e);
        }
    }
    res.send(tv_1.mockOnAirResponse);
}));
module.exports = router;
