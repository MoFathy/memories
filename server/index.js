import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express()
const port = 5000

app.use(bodyParser.json({limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))