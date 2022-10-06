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
const movies_1 = require("../mocks/movies");
const router = express_1.default.Router();
const REACT_APP_TMDB_API_KEY = "API_KEY";
router.get('/now-playing', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!movies_1.mockNowPlayingResponse) {
            const { data } = yield axios_1.default.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.json(data);
            return;
        }
        res.send(movies_1.mockNowPlayingResponse);
    }
    catch (e) {
        res.status(404).end();
    }
}));
router.get('/popular', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!movies_1.mockTrendingMoviesResponse) {
            const { data } = yield axios_1.default.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.json(data);
            return;
        }
        res.send(movies_1.mockTrendingMoviesResponse);
    }
    catch (e) {
        res.status(404).end();
    }
}));
router.get('/upcoming', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!movies_1.mockTrendingMoviesResponse) {
            const { data } = yield axios_1.default.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.json(data);
            return;
        }
        res.send(movies_1.mockTrendingMoviesResponse);
    }
    catch (e) {
        res.status(404).end();
    }
}));
router.get('/top-rated', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!movies_1.mockTrendingMoviesResponse) {
            const { data } = yield axios_1.default.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
            res.json(data);
            return;
        }
        res.send(movies_1.mockTrendingMoviesResponse);
    }
    catch (e) {
        res.status(404).end();
    }
}));
module.exports = router;
