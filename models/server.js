const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            category: '/api/category',
            products: '/api/products',
            search: '/api/search',
            users: '/api/users',
        }

        // Conectar a base de datos
        this.connectDb();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async connectDb() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() )
        

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
        
        this.app.use( this.paths.auth , require('../routes/auth'))
        this.app.use( this.paths.category , require('../routes/category'))
        this.app.use( this.paths.products , require('../routes/products'))
        this.app.use( this.paths.search , require('../routes/search'))
        this.app.use( this.paths.users , require('../routes/user'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port:', this.port)
        });
    }

}

module.exports = Server;