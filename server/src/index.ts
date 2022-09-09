import express from "express"
import cors from "cors"

const featureRoute = require("./api/routes/features");
const movieRoutes = require("./api/routes/movies");
const searchRoute = require("./api/routes/search");
const televisionRoutes = require("./api/routes/television");

const PORT = process.env.PORT || 3000

// Middleware
const app = express()
app.use(cors())

// Routes
app.use("/api/features", featureRoute)
app.use("/api/movies", movieRoutes)
app.use("/api/search", searchRoute)
app.use("/api/tv", televisionRoutes)


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})