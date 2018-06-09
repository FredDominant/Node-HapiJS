const Hapi = require('hapi');
const path = require('path');

const userRoutes = require('./routes/users.routes');
const generalRoutes = require('./routes/general.routes');

const server = new Hapi.Server({
	port: 3000,
	host: 'localhost'
});

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
