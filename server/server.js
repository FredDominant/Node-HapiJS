const Hapi = require('hapi');
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
