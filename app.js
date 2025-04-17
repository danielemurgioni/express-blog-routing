//importo express
const express = require("express");
//assegno una funzione a una variabile
const app = express();
//assegno la porta
const port = 3000;

// rotta madre
app.get("/", (req, res)=>{
    res.send("Server del mio blog");
});

//il server rimane in ascolto
app.listen(port, ()=>{
    console.log(`Il server è in ascolto alla porta ${port}`);
});