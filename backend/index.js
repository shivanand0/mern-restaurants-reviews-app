import app from './server.js'
import mongodb from 'mongodb'
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from './dao/reviewsDAO.js';
dotenv.config()
const MongoClient = mongodb.MongoClient //access to mongoclient from mongodb

const port = process.env.PORT || 4500

MongoClient.connect(
        process.env.RESTREVIEWS_DB_URI,
        //options to pass in the db
        {
            maxPoolSize: 50, //only 50 people can connect at a time
            wtimeoutMS: 2500, //at 2500ms the request will timeout
            useNewUrlParser: true, //coz mongodb nodejs driver rewrote the tool that uses to parse mongodb connected strings, so they put the new flag
        }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await RestaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`Server started running on port ${port}`)
        })
    })