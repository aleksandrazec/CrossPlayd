import express from "express";
import env from "dotenv";
import { createClient } from '@supabase/supabase-js'

env.config();

const app = express();
const port = 5001;
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY);


app.get("/",(req,res)=>{
    res.send("hola")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})

app.get("/users", async (_, response) => {
    try {
        const { data, error } = await supabase.from("Users").select();
        console.log(data);
        return response.send(data);
    } catch (error) {
        return response.send({ error });
    }
});