const express = require('express');
const mysql = require('mysql');
const cors = require("cors");


// Create an instance of Express
const app = express();

app.use(cors(),express.json());
// Create a connection to the MySQL database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql@123",
    database:'WOMENEDUCATION'
});

app.get("/data",async(req,res) =>{
        var getTableData = `SELECT *  FROM courseTable`;
        con.query(getTableData, function(err, result){
            if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})
app.get("/topic",async(req,res) =>{
    var getunitsTable = `SELECT *  FROM unitsTable`;
    con.query(getunitsTable, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})
app.get("/subtopic",async(req,res) =>{
    var getsubtopicTable = `SELECT *  FROM  subtopicTable  `;
    con.query(getsubtopicTable, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})

// app.get("/content",async(req,res) =>{
//     var getcontent ='SELECT * FROM unitsTable';
//     con.query(getcontent,function(err, result){
//         if(err) throw err;
//         res.status(200),send(result);
//     })
// })
const port = 5050;
app.listen(5050, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});