import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors"

const app = express()
const port = process.env.PORT || 3001;
dotenv.config({
    path: './.env'
})

app.use(cors())

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})