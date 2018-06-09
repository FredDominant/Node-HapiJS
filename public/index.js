const makeSignupRequest = () => {
	email = document.getElementById('inputEmail').value;
	password = document.getElementById('inputPassword').value;

	if (!(email.length && password.length)) return console.log('one or more fields empty!');
	return signUpCall(email, password);
}

const signUpCall = (email, password) => {
	axios({
		method: 'post',
		url: '/users/signup',
		data: { email, password }
	})
		.then((message) => { console.log(`success: ${message}`); })
		.catch((error) => { console.log(`error: ${error}`); })
}