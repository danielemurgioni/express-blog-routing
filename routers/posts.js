// importo express
const express = require("express");

// importo la classe router
const routers = express.Router();

//index
routers.get("/", (req, res)=>{
    res.send("Lista dei post")
})

//show
routers.get("/:id", (req, res)=>{
    res.send(`Dettaglio del post: ${req.params.id}`)
})

//update
routers.post("/", (req, res)=>{
    res.send("Inserimento nuovo post")
})

module.exports = routers;