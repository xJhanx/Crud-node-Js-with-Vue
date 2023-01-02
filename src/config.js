require('dotenv').config();

module.exports = {
    app:{
        port : process.env.PORT || 4000,
    },
    mysql: {
        host: process.env.MSQL_HOST || 'localhost',
        user: process.env.MSQL_USER || 'root',
        password: process.env.MSQL_PASSWORD || '',
        database: process.env.MSQL_DATABASE || 'nodeApiVueBackend'
    }
}