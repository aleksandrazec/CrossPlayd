import express from "express";
import cors from "cors";
import env from "dotenv";

env.config();
const app = express();
const port = 5001;

import DB from "./database/DBQueries.js";

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
   secret: 'some secret',
   resave: true,
   saveUninitialized: true,
   cookie: { secure: false }
  }))

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
 }))

app.get("/", (req, res) => {
    res.send("API is Running....")
});

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})