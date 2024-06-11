// configuração inicial 
const express= require("express")
const app= express()
const cors= require('cors')

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
    res.json({message: 'única rota disponível'})
})



//criar uma parta acessar a API
app.listen(3000)