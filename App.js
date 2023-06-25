const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require("cors")
const port = 3000;

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"root@123",
    database:"major"
})
db.connect((err)=>{

    if (err) {
        
        console.log('error');

    } else {

        console.log("Database connected");
        
    }

})
app.get("/",(req,res)=>{
    res.json("Server Started !")
})
app.get("/table1",(req,res)=>{

    let sql = "SELECT*FROM Table_7";
    db.query(sql,(err,data)=>{

        if (err) {

            console.log("error");

        } else {

            console.log('Rojer !!!');
            res.send(data);
            res.end();
   
        }
    })
})
app.get("/table2",(req,res)=>{

    let sql = "SELECT*FROM Table_10";
    db.query(sql,(err,data)=>{

        if (err) {

            console.log("error");

        } else {

            console.log('Rojer !!');
            res.send(data);
            res.end();
   
        }
    })
})
app.listen(port,()=>{

    console.log(`running on server ${port}`);
})