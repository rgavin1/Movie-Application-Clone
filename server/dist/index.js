"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const featureRoute = require("./api/routes/features");
const movieRoutes = require("./api/routes/movies");
const searchRoute = require("./api/routes/search");
const televisionRoutes = require("./api/routes/television");
const PORT = process.env.PORT || 3000;
// Middleware
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Routes
app.use("/api/v1/features", featureRoute);
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/search", searchRoute);
app.use("/api/v1/tv", televisionRoutes);
app.get("/api/v1/", (req, res) => {
    res.send("<h2>Welcome to Ramsey's Movie API</h2>");
});
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
