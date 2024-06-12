

class HomeController{
    static inicio(req, res){
        try {
            res.status(200).json({
                mensagem: "Seja Bem-vindo ao app de suas coordenadas geográficas."
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro.",
                err: error
            })
        }
    }
}
module.exports= HomeController