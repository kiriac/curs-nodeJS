'use strict'
const path = require('path');

module.exports.init = initRoutes;

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes');
    
    console.log(__dirname)
    console.log(routesPath)
    const routes = ['users','address'];

    routes.forEach(route => {
        app.use(require(routesPath + '/' + route));
    });
}
