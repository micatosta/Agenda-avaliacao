import Atendimento from '../model/atendimento.js'


class ServiceAtendimento {
    
    async FindAll() {
        return Atendimento.FindAll()

    }
    async FindOne(id) {
    return Atendimento.findByPk(id)

    }
    async Create( dia, hora, valor, concluido) {
       return Atendimento.create({dia,hora,valor,concluido})
        
        
    }
    async Update(id, dia ,hora, valor, concluido) {
       const oldAtendimento = Atendimento.findByPk(id)
           if (!oldAtendimento) {
            throw new Error('Atendimento não encontrado!')
           }  
            oldAtendimento.dia = dia || oldAtendimento.dia
            oldAtendimento.hora = hora || oldAtendimento.hora
            oldAtendimento.valor = valor || oldAtendimento.valor

            if(concluido !== undefined) {
                oldAtendimento.concluido = concluido
            }
             oldAtendimento.save()
            return oldAtendimento
        }
       async Delete(id) {
    const atendimento = await Atendimento.findByPk(id)
    if (!atendimento) {
      throw new Error('Atendimento não encontrado!')
    }
    return atendimento.destroy()
        }
}
export default new ServiceAtendimento()