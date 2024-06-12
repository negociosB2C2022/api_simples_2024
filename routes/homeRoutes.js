const router = require("express").Router()

//importando os modules
const HomeController= require("../controller/HomeController")

router.get('', HomeController.inicio)

module.exports= router