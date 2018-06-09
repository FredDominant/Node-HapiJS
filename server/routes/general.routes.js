const generalRoutes = (server) => {
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			const response = reply.response("Hello World");
			response
				.message("success")
				.code(200);
			return response;
		}
	});
};

module.exports = generalRoutes;