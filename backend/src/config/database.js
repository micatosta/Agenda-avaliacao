import { Sequelize } from 'sequelize'

class Database{
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize({
            database: 'atividade_oxdd',
            host: 'dpg-d4plp72dbo4c73bd91ng-a',
            password:'YL2d8jWClEHmBgVuVt9XFjBzNuzutxxn',
            username: 'atividade_oxdd_user',
            dialect:'postgres'
           
        })
    }
}
export default new Database()