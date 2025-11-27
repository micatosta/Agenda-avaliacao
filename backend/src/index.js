import express from 'express'
import router from './router/cliente.js';
import database from './config/database.js';
import RouterAtendimento from './router/atendimento.js';



const app = express();
app.use(express.json())
app.use(RouterAtendimento)

app.use('/api/v1/atendimento',  router)


const port = 3000

database.db
    .sync ({force: false})
    .then((_) => {
        app.listen(port,() => {
    console.info("Servidor rodando na porta " +port)
});


    })
    .catch((e)=> {
        console.log("nao foi possivel conectar com o banco" + e)
    })

