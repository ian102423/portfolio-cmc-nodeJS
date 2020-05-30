const express = require('express');
const bodyParser = require('body-parser');

const movieRouter = express.Router();

movieRouter.route('/')
    .all((req, res, next) => {// use as default for all routing method
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next(); // pass control of the application routing next relevant routing method after this one
    })
    .get((req, res) => {
        res.end('Seding all Movies to you...');
    })
    .post((req, res) => {
        res.end(`Adding the Movies: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => { // approprivate error code - 403
        res.statusCode = 403;
        res.end('PUT operation not supported on /movies');
    })
    .delete((req, res) => { // normally dangerous operation, make sure don't allow ordinary users to do
        res.end('Deleting all Movies...');
    });

module.exports = movieRouter;