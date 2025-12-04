import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    async FindAll(_, res) {
        try {
            const atendimentos = await ServiceAtendimento.FindAll()
            res.status(200).send({atendimentos})
        } catch (error) {
             res.status(500).send({ error: error.message }) 
        }
    }
    
    async FindOne(req, res) {
        try {
            const {id} = req.params
            const atendimento = await ServiceAtendimento.FindOne(id)
            res.status(200).send({atendimentos})
        } catch (error) {
             res.status(500).send({ error: error.message }) 
        }
    }
    async Create(req, res) {
        try {
            const { dia, hora, valor, concluido} = req.body
            await ServiceAtendimento.Create(dia, hora, valor, concluido)
            res.status(201).send('Criado com sucesso!')
        } catch (error) {
             res.status(500).send({ error: error.message }) 
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const {dia,hora,valor,concluido} =req.body
            await ServiceAtendimento.Update(id,dia,hora,valor,concluido)
            res.status(200).send({msg: 'atualizado!'  })
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    async Delete (req,res) {
        try {
            const {id} = req.params
            await ServiceAtendimento.Delete(id)
            
            res.status(200).send()
        } catch (error) {
             res.status(500).send({error: error.message})
        }
    }
}
  export default new ControllerAtendimento()