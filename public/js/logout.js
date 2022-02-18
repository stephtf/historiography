
const logoutForm = async (event) => {

    const userExit = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(userExit.ok) {
        document.location.replace('/');
    } else {
        console.log('something went wrong with logout');
    }
}


document
    .getElementById('logout-button')
    .addEventListener('click', logoutForm);