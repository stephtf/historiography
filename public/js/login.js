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
        location.replace('/home');
    } else {
        alert('username and/or password incorrect');
    }
    }
};

document
    .getElementById('login-button')
    .addEventListener('click', loginForm);


function password_show_hide() {
    var x = document.getElementById("existing-password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "existing-password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
    }