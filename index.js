// configuração inicial 
const express= require("express")
const app= express()
const cors= require('cors')
require('dotenv').config()
const mogoose= require("mongoose")

//configurando a leitura de JSON (midwares)
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(cors())


//criar rota inicial 
app.get('/', (req, res)=>{
    res.json({message: 'Conectado ao BD'})
})


//pegando todas as coordenadas
const Coordenadas= require("./Coordenadas")
app.get("/coordenadas", async(req, res)=>{
    try {
        const coord= await Coordenadas.find()
        res.status(200).json({
            mensagem:"Todas as coordenadas logo abaixo.",
            coord: coord
        })

    } catch (error) {
        res.status(200).json({mensagem: "Ocorreu um erro!"})
    }
})
    *


//criar uma parta acessar a API
/*
const porta= process.env.PORT || 3000
app.listen(porta)
*/



//conectando com o banco de dados 
const BD_USER= process.env.BD_USER
const BD_PASSWORD= encodeURIComponent(process.env.BD_PASSWORD)
const NAME_BD= process.env.NAME_BD
mogoose.connect(
    `mongodb+srv://${BD_USER}:${BD_PASSWORD}@cluster0.hhgpc0q.mongodb.net/${NAME_BD}?retryWrites=true&w=majority&appName=Cluster0`,
)
.then(()=>{
    const port = process.env.PORT|| 4000
    //criar uma parta acessar a API
    app.listen(port)
    console.log("Conexão realizada. Porta: "+ port)
})
.catch((error)=> console.log(error))
