import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const port = process.env.PORT || 3001;
dotenv.config({
    path: './.env'
})

app.use(cors())

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'build')));

app.use(router)

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "build", "./build/static/index.html"))
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})