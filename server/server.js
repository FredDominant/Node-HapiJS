
const Hapi = require('hapi');
const path = require('path');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users.routes');
const generalRoutes = require('./routes/general.routes');
require('dotenv').config();

const server = new Hapi.Server({
	port: 3000,
	host: 'localhost'
});

const databaseUri = process.env.MONGODB_URL;
/**
 * database connection
*/

mongoose.connect(databaseUri)
	.then(() => console.log('database connected!'))
	.catch((error) => { console.error.bind(console, 'connection error: ') })

generalRoutes(server);
userRoutes(server);

const startServer = async () => {

	await server.register(require('inert'));

	server.route({
		method: 'GET',
		path: '/home',
		handler: (request, reply) => {
			return reply.file('./public/index.html');
		}
	});

	server.route({
		method: 'GET',
		path: '/public/{file}',
		handler: (request, reply) => {
			return reply.file(`./public/${request.params.file}`);
		}
	});

	await server.start()
		.then(() => {
			console.log(`Server started at: ${server.info.uri}`);
		})
		.catch((error) => {
			console.log(`error: ${error}`);
		});
	
};

startServer();
module.exports = server;
