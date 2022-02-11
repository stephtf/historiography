console.log('this is the signup js page');

const signupForm = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#new-username').value.trim(); 
    const password = document.querySelector('#new-password').value.trim();
    const passwordAgain = document.querySelector('#new-password-again').value.trim();

    if (password === passwordAgain) {
        const addUser = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (addUser.ok) {
            // If successful, redirect the browser to the homepage
            document.location.replace('/home');
        } else {
            alert(`your passwords don't match. try again`);
        }
    } 
};

document
    .getElementById('signup-button')
    .addEventListener('click', signupForm);