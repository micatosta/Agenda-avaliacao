import database from "../config/database.js"
import atendimento from "./atendimento.js"
class Cliente {
   
   
    constructor() {
        this.model = database.db.define('cliente', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING
            },
            senha: {
                type: database.db.Sequelize.STRING
            },
           
        })
    }
}
const ModelAtendimento = new atendimento().model;
new this.model.Hasmany(ModelAtendimento) 
    

export default new Cliente();