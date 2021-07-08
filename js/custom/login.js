let eMail = document.querySelector('#email');
let pwd = document.querySelector('#password');
let loginForm = document.querySelector('#login-form');


loginForm.addEventListener('submit', loginUser)

function loginUser(e) {
    e.preventDefault();

    const email = eMail.value;
    const password = pwd.value;

    if (!email || !password) {
        alert('Input fields should not be empty')
    } else if (password.length < 8) {
        console.log(password.length)
        alert('Password should have at least 8 characters')
    } else {
        const payload = {
            password: password,
            email: email,
        }
        fetch('https://event360.herokuapp.com/api/v1/users/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log(data.token)
                let userToken = data.token;
                if (userToken) {
                    localStorage.setItem('user_jwt', userToken);
                    return (window.location.href = '/index.html');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

