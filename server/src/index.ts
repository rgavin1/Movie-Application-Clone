import express from "express"
import cors from "cors"

const featureRoute = require("./api/routes/features");
const authenticationRoute = require("./api/routes/authentication");
const movieRoutes = require("./api/routes/movies");
const searchRoute = require("./api/routes/search");
const televisionRoutes = require("./api/routes/television");
const personsRoutes = require("./api/routes/persons")

const PORT = process.env.PORT || 3000

// Middleware
const app = express()
app.use(cors())
app.use(express.json()) // expresses build-in body-parser

// Routes
app.use("/api/v1/features", featureRoute)
app.use("/api/v1/login", authenticationRoute)
app.use("/api/v1/movies", movieRoutes)
app.use("/api/v1/search", searchRoute)
app.use("/api/v1/tv", televisionRoutes)
app.use("/api/v1/persons", personsRoutes)

app.get("/api/v1/", (req, res) => {
    res.send(
        "<h2>Welcome to Ramsey's Movie API</h2>"
    );
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})