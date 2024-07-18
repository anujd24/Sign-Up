const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect("mongodb+srv://anujd24:GkTYCfHDWEwzmVIn@ad.tqrvfcl.mongodb.net/userappnew?")

const User = mongoose.model('Users', { name: String , email:String , password: String});

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({
        email: username
    });

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({ 
    name: 'Anuj Dubey',
    email: "anuj@gmail.com",
    password:"1234"
 });

user.save();
res.json({
    msg: "User created Successfully"
})
});


