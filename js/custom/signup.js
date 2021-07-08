let fName = document.querySelector('#first-name');
let lName = document.querySelector('#last-name');
let pwd = document.querySelector('#password');
let cPwd = document.querySelector('#confirm-password')
let phoneNum = document.querySelector('#phone')
let eMail = document.querySelector('#email');
let signupForm = document.querySelector('#signup-form')
let signupAlert = document.querySelector('.signup-alert')
let errorAlert = document.querySelector('#error-display')
let spinner = document.querySelector('.btn-spinner')

spinner.style.display = 'none';

signupForm.addEventListener('submit', signUpUser)


async function signUpUser(e) {
    e.preventDefault();
    const firstName = fName.value;
    const lastName = lName.value;
    const email = eMail.value;
    const password = pwd.value;
    const confirmPassword = cPwd.value;
    const phone = phoneNum.value
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phone) {
        alert('Input fields should not be empty')
        console.log(firstName)
        console.log(phone.length)
        // signupAlert.classList.remove('d-none')
        // errorAlert.innerHTML = 'Input fields should not be empty'

        // setTimeout(() => {
        //     signupAlert.remove()
        //     signupAlert.classList.add('d-none')
        // }, 3000);

    } else if (password !== confirmPassword) {

        alert('Passwords do not match')
    } else if (phone.length < 11 || phone.length > 11) {
        console.log(phone.length)
        alert('Invalid phone number')
    } else if (password.length < 8 || confirmPassword.length < 8) {
        console.log(password.length)
        console.log(confirmPassword.length)
        alert('Password should have at least 8 characters')
    } else {
        spinner.style.display = 'block';
        // if ()
        const payload = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
            phoneNumber: phone
        }
        console.log(payload)

        fetch('https://event360.herokuapp.com/api/v1/users/signup', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Account created Successfully')
                console.log(data.token)
                let userToken = data.token;
                if (userToken) {
                    localStorage.setItem('user_jwt', userToken);
                    return (window.location.href = 'index.html');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


}

