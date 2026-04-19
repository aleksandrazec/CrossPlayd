const express = require('express')
const app = express()
const port = 5000

app.get("/",(req,res)=>{
res.send("hola")
})

app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})

