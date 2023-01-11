const express = require('express');

const data = require('./data.js');


const server=express();
server.use(express.json());


server.get('/', (req,res) => {
    res.send("Express Geldi...");
});


server.get("/aktorler", (req, res) => {
    res.status(200).json(data);
});

server.get("/aktorler/:id", (req,res) => {

    console.log("req.body", req.body);


    const {id}=req.params;
    const aktor=data.find(aktor => aktor.id ===parseInt(id));
    if(aktor){
        res.status(200).json(aktor);
    }else{
        res.status(404).send("Aradığınız aktör bulunamadı çünkü yoktu55555555...");
    }

});


server.listen(5000, () => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor");
});


