const Coordenadas= require('../models/Coordenadas')

class CoordenadasController{
    static async allCordenadas(req, res){
        try {
            const allCoordenadas= await Coordenadas.find()
            res.status(200).json({
                mensagem: "Todas as coordenadas",
                coord: allCoordenadas
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro.",
                err: error
            })
        }
    }




// ADICIONA UMA NOVA COORDENADA NO BANCO DE DADOS
    static async newCoordenadas(req, res){
        const newCoordenada= req.body.c
        try {
            await Coordenadas.create(newCoordenada)
            res.status(200).json({
                mensagem: "Colocar nova coordenada",
                coord: newCoordenada,
                status: true
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "deu erro oia, mas ta aqui!"
            })
        }
    }
}
module.exports= CoordenadasController