const mongoose = require('mongoose');
const User = require('../models/user.model');

const userRoutes = (server) => {

	server.route({
		method: 'GET',
		path: '/users/{id}',
		handler: (request, reply) => {
			return 'Hello World'
		}
	});

	server.route({
		method: 'GET',
		path: '/users',
		handler: (request, reply) => {
			return User.find().exec()
				.then(user => {
					const response = reply.response(user)
					response
						.message('success')
						.code(200)
					return response
				})
				.catch((error) => {
					const response = reply.response(error)
					response
						.message('error')
						.code(500)
					return response
				});
		}
	});

	server.route({
		method: 'POST',
		path: '/users/signup',
		handler: (request, reply) => {

			const { email, password } = request.payload;

			const newUser = new User({
				_id: new mongoose.Types.ObjectId(),
				firstName: 'Steph',
				lastName: 'Curry',
				email,
				password
			})

			return newUser.save()
				.then(success => {
					const response = reply.response(success);
					response
						.message('success')
						.code(201);
						return response;
				})
				.catch(error => {
					const response = reply.response(error)
					response
						.message('error')
						.code(500)
						return response;
				});
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