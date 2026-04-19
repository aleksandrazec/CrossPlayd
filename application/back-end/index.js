import express from "express";
import env from "dotenv";
import { createClient } from '@supabase/supabase-js'

env.config();

const app = express();
const port = 5001;
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY);


app.get("/",(req,res)=>{
    res.send("SUPABAAAAAAAAAASSEEEE!!!!")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})

// get all users
app.get("/users", async (_, res) => {
    try {
        const { data, error } = await supabase.from("User").select();
        console.log(data);
        return res.send(data);
    } catch (error) {
        return res.send({ error });
    }
});

// get user through id
app.get("/users/:user_id", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("User")
            .select()
            .eq("user_id", request.params.user_id)
        console.log(data);
        return response.send(data);
    } catch (error) {
        return response.send({ error })
    }
});

// post a user
app.post("/users", async(req, res) => {
    try {
        console.log(req.body);
        const { data, error } = await supabase.from("User").insert(req.body);
        if (error) {
            return res.status(400).json(error);
        }
        res.status(200).json(req.body);
    } catch (error) {
        res.send({ error });
    }
});

// updating a user through id
app.put("/users/:user_id", async (req, res) => {
    console.log(req.params);
    try {
        const { data: updatedData, error: updatedError } = await supabase
            .from("User")
            .update({
                title: req.body.title ? req.body.title : data[0].title,
                body: req.body.body ? req.body.body : data[0].body,
            })
            .eq("user_id",req.params.user_id);
            const { data, err } = await supabase.from("User").select();
            return res.status(200).send(data);
    } catch (error) {
        res.send({ error });
    }
});

// delete a user
app.delete("/users/:user_id", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("User")
            .delete()
            .eq("id", req.params.user_id);
        const { datar, errorr } = await supabase.from("User").select();
        if (error) {
            return res.status(400).json(error);
        }
        return res.send(datar);
    } catch (error) {
        res.send({ error });
    }
});