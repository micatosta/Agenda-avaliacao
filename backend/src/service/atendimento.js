import atendimento from '../model/atendimento.js'


class ServiceAtendimento {
    
    async FindAll() {
        return atendimento.FindAll()

    }
    async FindOne(id) {
    if (!id) throw new Error("favor infromar o ID")

        const atendimento = await atendimento.findByPk(id)
        
        if(!atendimento)
            throw new Error(`Atendimento ${id} nao encontrado`)
        return atendimento
    }
    async Update(id, dia ,hora, valor, concluido) {
       const oldAtendimento = atendimento.findByPk(id)
              
             // onload.User.nome = nome || oldUser.nome
              onload.Atendimento.senha = senha
              ?  await bcrypt.hash(String(senha), SALT)
              :  oldAtendimento.senha
    }
     async Create( dia, hora, valor, concluido) {
            if (!dia || !hora|| !valor || !concluido) {
                throw new Error("favor preencher todos os campos")

            }
            await atendimento.Create({dia, hora, valor, concluido})
        
            
        }
        async Delete(id) {
            if (!id) throw new Error("ID nao informado")
                await atendimento.destroy({where: {id} })
        }
}
export default new ServiceAtendimento()