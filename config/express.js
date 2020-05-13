'use strict'

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const dateHelper = require('../helpers/date');

module.exports.init = initExpress;

function initExpress(app) {
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(function(req, res, next){
        console.log(`API call ${dateHelper.formattedDate()} and it is a ${dateHelper.test()}`);
        req.resources = req.resources || {};
        next();
    });
}
