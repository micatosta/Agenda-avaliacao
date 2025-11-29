import { Sequelize } from 'sequelize'

class Database{
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize({
            database: 'agenda',
            host: 'localhost',
            password:'',
            username: 'root',
            dialect:'mysql'
           
        })
    }
}
export default new Database()