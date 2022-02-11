console.log('TESTING THE LOGIN JAVASCRIPT FILE CONNECTION');

const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#existing-username').value.trim();

    const password = document.querySelector('#existing-password').value.trim();



}






document
    .getElementById('login-button')
    .addEventListener('click', loginForm);
