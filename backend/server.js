import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"
const app = express()

app.use(cors())

/*  
    In old version of express, body-parser was used
    but now that is included now in express
    express.json() means our server can accept the json in the body of request
*/
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }))

export default app