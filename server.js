const hapi = require('hapi');

const server = hapi.Server({
	host: "localhost",
	port: "3000"
});

server.route({
	method: 'GET',
	path: '/',
	handler: (request, handler) => {
			console.log(`request object is ${request}`);
			return "Hello World"
	}
})

const startServer = async () => {
	try {
		await server.start();
	} catch (error) {
		console.log("Server unable to start: ", error);
		process.exit(0);
	}

	console.log(`Server running on port ${server.info.uri}`);
}

startServer();