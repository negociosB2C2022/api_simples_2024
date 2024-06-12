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






















/*
const personRoutes = require("./routes/personRoutes")
app.use('/person', personRoutes)

//criar rota inicial 
app.get('/', (req, res)=>{
    res.json({message: 'Oi Express'})
})


///rotas das coordenadas
const coordenadasRoutes= require("./routes/coordenadasRouter")
app.use('/coordenadas', coordenadasRoutes)
*/
//ROTAS DA HOME - .../
const homeRoutes= require("./routes/homeRoutes")
app.use('/', homeRoutes)

//ROTAS DAS COORDENADAS - .../coordenadas
const coordenadasRouter= require("./routes/coordenadasRouter")
app.use('/coordenadas', coordenadasRouter)





















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



/*
const porta= 3000
app.listen(porta)
*/