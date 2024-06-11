// configuração inicial 
const express= require("express")
const app= express()
const cors= require('cors')
require('dotenv').config()

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
    res.json({message: 'Tempo para atulização da api'})
})



//criar uma parta acessar a API
const porta= process.env.PORT || 3000
app.listen(porta)