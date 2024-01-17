const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

const conString = "mongodb://localhost:27017";
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("sending from home")
})

app.get("/getuser",(req,res)=>{
    mongoClient.connect(conString).then(clientObj=>{
       var database = clientObj.db('tutorials');
       database.collection("users").find({}).toArray().then(document =>{
        res.send(document)
       })
    })
})

app.post('/registerUser',(req,res) =>{
    const {username,userId,password} = req.body
    const user = {userId,username,password}
    // const user = {
    //     userId:req.body.userId,
    //     username:req.body.username,
    //     password:req.body.password
    // }

    mongoClient.connect(conString).then(clientObj => {
        var database = clientObj.db('tutorials');
        database.collection("users").insertOne(user)
        .then(()=>{
            console.log("registerd successfully")
            res.end()
        })
    })
})

app.listen(4000,()=>{
    console.log("app running on port no 4000")
});
