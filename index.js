const express = require('express');
const fs = require('fs')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post('/',(req,res)=>{
    console.log("my body is sended by the calling place",req.body)
    const data = JSON.stringify(req.body)
    fs.writeFile('./file.json',data,err=>{
        if(err){
            console.log("we are facing some error")
        }
        else{
            console.log("please check file data should be written in file.json file");
        }
    })
    res.send(data)
})

app.get('/data',(req,res)=>{
    res.send("thanks for the data you provided")
})

