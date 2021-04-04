const express=require("express");
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("server Started");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");

});
app.post("/",(req,res)=>{
const fName=req.body.fname;
const lName=req.body.lname;
res.redirect("/welcome",fName,lName);
});

app.get("/Welcome",(req,res)=>{

res.send("welcome");

});