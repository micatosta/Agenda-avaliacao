import {Sequelize} from 'sequelize'

class Database{
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize({
            database: 'agenda',
            host: 'localhost',
            password:'',
            username: 'dev',
            dialect:'mysql'
           
        })
    }
}
export default new Database()