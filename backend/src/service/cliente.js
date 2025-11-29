import Cliente from "../model/cliente.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SALT = 10
const JWT_SECRET = "M3uS3gr3d0"

class ServiceCliente {
  async FindAll() {
    return await Cliente.findAll()
  }

  async FindOne(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const cliente = await Cliente.findByPk(id)

    if (!cliente) {
      throw new Error(`Cliente ${id} não encontrado!`)
    }

    return cliente
  }

  async Create(nome, email, senha) {
    if (!nome || !email || !senha) {
      throw new Error('Favor preencher todos os campos!')
    }

    const senhaCript = await bcrypt.hash(String(senha), SALT)

    await Cliente.create({
      nome, email, senha: senhaCript
    })
  }

  async Update(id, nome, email, senha) {
    const oldCliente = await Cliente.findByPk(id)

    if (!oldCliente) {
      throw new Error('Cliente não encontrado!')
    }

    oldCliente.nome = nome || oldCliente.nome
    oldCliente.email = email || oldCliente.email
    oldCliente.senha = senha 
      ? await bcrypt.hash(String(senha), SALT)
      : oldCliente.senha

    oldCliente.save()
  }

  async Delete(id) {
    const oldCliente = await Cliente.findByPk(id)
    if (!oldCliente) {
      throw new Error('CLiente não encontrado!')
    }

    oldCliente.destroy(id)
  }

  async Login(email, senha) {
    if (!email || !senha) {
      throw new Error('Email ou senha inválidos.')
    }

    const cliente = await Cliente.findOne({ where: { email } })

    if (!cliente || !(await bcrypt.compare(String(senha), cliente.senha))) {
      throw new Error('Email ou senha inválidos.')
    }

    return jwt.sign(
      { id: cliente.id, nome: cliente.nome },
      JWT_SECRET,
      { expiresIn: 60 * 60 }
    )
  }
}

export default new ServiceCliente()