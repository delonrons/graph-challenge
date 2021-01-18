/**
 * The mock rest api, that reads the route and data from a json file.
 */

const jsonServer = require('json-server');
const mockServer = jsonServer.create();
const router = jsonServer.router('src/mock/rest-api.json');
const middlewares = jsonServer.defaults();

mockServer.use(middlewares);
mockServer.use(router);

module.exports = mockServer;