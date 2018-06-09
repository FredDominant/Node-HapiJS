// $(document).ready(() => {
// 	$("#signupButton").click((event) => {
// 		event.preventDefault();
// 		let email = $("#inputEmail").val();
// 		let password = $("#inputPassword").val();

// 		if (email.length && password.length) {
// 			// Make post request
// 		} else {
// 			// Display error
// 			console.log("One or more fields empty!");
// 		}
// 		return false;
// 	})
// });
console.log('regrtgrtg')


// const axios = require('axios');

const onSignupClick = () => {
	let submitButton = document.getElementById('signupButton');
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();
		let signupEmail = document.getElementById('inputEmail');
		let signupPassword = document.getElementById('inputPassword');
		if (signupEmail.value && signupPassword.value) {
				// sendSignupData(signupEmail, signupPassword);
				console.log('correct stuff');
		} else {
			// TODO notify empty stuff
			console.log('One or more fields empty!');
		}
	
	});
}

// function sendSignupData(email, password) {
// 	axios({
// 		method: 'post',
// 		url: '/signup',
// 		data: {
// 			email,
// 			password
// 		}
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((response) => {
// 		console.log(response);
// 	})
// }