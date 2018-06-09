const Hapi = require('hapi');

const server = Hapi.Server({
	host: 'localhost',
	port: "3000"
});

// server.connection({
	
// });

server.route([
	{
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			return 
		}
	}
])

server.start()
.then(() => {
	console.log(`server listening on port ${server.info.port}`);
})
.catch((error) => {
	if (error) console.log(`error ${error} occurred`);
});
// const server = hapi.Server({
// 	host: "localhost",
// 	port: "3000"
// });

// server.route({
// 	method: 'GET',
// 	path: '/',
// 	handler: (request, response) => {
// 			return response.file('./public/index.html');
// 	}
// });

// server.route({
// 	method: 'GET',
// 	path: '/home',
// 	handler: (request, response) => {
// 			return "Home Route"
// 	}
// });

// server.route({
// 	path: '/signup',
// 	method: 'POST',
// 	handler: (request, response) => {
// 		console.log(request);
// 		// console.log(request.body.password);
// 	}
// });

// const startServer = async () => {
// 	try {
// 		await server.register(require('inert'));
// 		await server.register({
// 			plugin: require('hapi-pino'),
// 			options: {
// 				prettyPrint: false,
// 				logEvents: ['response']
// 			}
// 		});

// 		await server.start();

// 	} catch (error) {
// 		console.log("Server unable to start: ", error);
// 		process.exit(0);
// 	}

// 	console.log(`Server running at port ${server.info.uri}`);
// }

// startServer();