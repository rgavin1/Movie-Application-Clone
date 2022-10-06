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
const trendingAllWeekResponse_1 = require("../mocks/feature/trendingAllWeekResponse");
const router = express_1.default.Router();
const REACT_APP_TMDB_API_KEY = "API_KEY";
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { media } = req.query;
    try {
        if (!trendingAllWeekResponse_1.trendingAllWeekResponse) {
            const { data } = yield axios_1.default.get(`https://api.themoviedb.org/3/trending/${req.params.media}/week?api_key=${REACT_APP_TMDB_API_KEY}`);
            res.json(data);
            return;
        }
        res.send(trendingAllWeekResponse_1.trendingAllWeekResponse);
    }
    catch (e) {
        res.status(404).end();
    }
}));
module.exports = router;
