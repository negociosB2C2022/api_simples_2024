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




    // DELETA UMA COORDENADA
    static async delCoordenada (req, res){
        try {
            const infos= req.body
            if(infos.pass!= "manoellA"){
                res.status(500).json({mesagem: "Senha Inválida", status: false})
                return
            }

            const del= await Coordenadas.deleteOne({_id: infos.id})
            res.status(200).json({
                message: `Localização foi excluida com sucesso!.`,
                //resp: infos
                status: true
            })

    
        } catch (error) {
            res.status(500).json({
                mensagem: "Erro ao excluir!"
            })
        }
        
        
    }




}






module.exports= CoordenadasController