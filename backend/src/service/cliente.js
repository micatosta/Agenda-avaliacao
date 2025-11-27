import Cliente from '../model/cliente.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cliente from '../model/cliente.js';


const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10;
class ServiceCliente {

    FindAll() {
        // return User.FindAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // preciso procurar um usuario no banco
        const cliente = await cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return cliente
    }

    async Create(nome, email, senha, ) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }
        const senhaCriptografada = await bcrypt.hash(String(senha), SALT)

        await cliente.create({
            nome,
            email,
            senha: senhaCriptografada,
           
        })
    }

    async Update(id, nome,senha) {
       const oldCliente = cliente.findByPk(id)
        
       // onload.User.nome = nome || oldUser.nome
        onload.Cliente.senha = senha
        ?  await bcrypt.hash(String(senha), SALT)
        :  oldCliente.senha

        // User.Update(id, nome)
    }

    Delete(id) {
        // User.Delete(id)
    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const cliente = await Cliente.findOne({ where: { email } })

        if (!cliente
            || !(await bcrypt.compare(String(senha),cliente.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign(
            { id: cliente.id, nome: cliente.nome},
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente()