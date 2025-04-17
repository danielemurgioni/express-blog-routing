// importo express
const express = require("express");

// importo la classe router
const routers = express.Router();

//index
routers.get("/", (req, res)=>{
    res.send("Lista dei post")
})

module.exports = routers;