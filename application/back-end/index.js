import express from "express";
import cors from "cors";
import env from "dotenv";
import session from 'express-session'
import userRoutes from "./routes/userRoutes.js";
import games from "./routes/games.js"
import forums from "./routes/forums.js"
import reviews from "./routes/reviews.js"

env.config();
const app = express();
const port = 5000;

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

app.use("/supabase", userRoutes);
app.use("/igdb", games);
app.use("/community", forums);
app.use("/reviews", reviews);

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})