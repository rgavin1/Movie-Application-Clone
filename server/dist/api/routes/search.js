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
const express_1 = __importDefault(require("express"));
const search_1 = require("../mocks/search");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { term } = req.query;
    if (!term)
        return res.status(400).send({ message: "invalid request" });
    /**
     * TODO: Set-up DynamoDB
     *
     * Check my database for the information before checking IMDB.
     * This should provide caching and reduce the number of request the
     * IMDB API server.
     *
     */
    try {
        const searchedItems = search_1.mockMultiSearchResponse.results.filter(item => { var _a, _b; return ((_a = item.name) === null || _a === void 0 ? void 0 : _a.includes(term)) || ((_b = item.title) === null || _b === void 0 ? void 0 : _b.includes(term)); });
        res.status(200).send({ data: searchedItems, total_results: searchedItems.length });
    }
    catch (e) {
        res.status(404).send(e);
    }
}));
module.exports = router;
