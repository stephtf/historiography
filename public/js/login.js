console.log('TESTING THE LOGIN JAVASCRIPT FILE CONNECTION');

const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#existing-username').value.trim();

    const password = document.querySelector('#existing-password').value.trim();

    if (username && password) {
        const userEntry = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

    if(userEntry.ok) {
        document.location.replace('/home');
    } else {
        alert('failed to log in');
    }
    }
};

document
    .getElementById('login-button')
    .addEventListener('click', loginForm);