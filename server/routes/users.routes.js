const userRoutes = (server) => {

	server.route({
		method: 'GET',
		path: '/users/{id}',
		handler: (request, reply) => {
			const response = reply.response(`Hello ${request.params.id}`);
			response
				.message('success')
				.code(200);
				return response;
		}
	});

	server.route({
		method: 'POST',
		path: '/users/signup',
		handler: (request, reply) => {
			const response = reply.response('sign up successful')
			response
				.message("success")
				.code(201)
			return response;
		}
	});
	
	server.route({
		method: 'POST',
		path: '/users/login',
		handler: (request, reply) => {
			const response = reply.response('login successful')
			response
				.message("success")
				.code(200)
			return response;
		}
	});

};

module.exports = userRoutes;