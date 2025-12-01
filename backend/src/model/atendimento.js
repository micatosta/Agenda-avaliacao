import database from '../config/database.js'
import atendimento from '../service/atendimento.js';
import Cliente from '../model/cliente.js'


class Atendimento{
    constructor(){
        this.model = database.db.define('atendimento', {
            id:{
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            dia:{
                type:database.db.Sequelize.STRING,

        
            },
            hora: {
                type:database.db.Sequelize.STRING
            },
            valor: {
                type:database.db.Sequelize.FLOAT
            },
            concluido:{
                type: database.db.Sequelize.BOOLEAN,
                defaultValue: false
            }
                
        })
    }
}



export default new Atendimento();