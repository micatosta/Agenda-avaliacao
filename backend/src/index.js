import express from 'express'
import cors from 'cors'
import routerCliente from './router/cliente.js'
import routeratendimento from './router/atendimento.js'
import database from './config/database.js'
import './model/relacao.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', routerCliente, routeratendimento)

const port = 3000

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(port, () => {
      console.info("Servidor rodando na porta " + port)
    })
  })
  .catch((e) => {
    console.log("Não conectou com o banco " + e)
  })