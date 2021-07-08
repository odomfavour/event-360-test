let loggedIn = document.querySelector('.isLoggedIn');
let notLoggedIn = document.querySelectorAll('.notLoggedIn');

function Auth(req, res, next) {
    const token = localStorage.getItem('user_jwt');
    console.log(token);

    if (token) {
        loggedIn.style.display = 'block';
        for (let n in notLoggedIn) {
            notLoggedIn[n].style.display = "none";
        }
    }

    // if (!token) {
    //     window.location.href = '/login.html';
    // }
}

Auth();

function bid() {
    const token = localStorage.getItem('user_jwt');

    if (!token) {
        window.location.href = 'login.html';
    } else {
        alert('item was selected')
    }

}

function logout() {
    let removed = localStorage.removeItem('user_jwt')
    const token = localStorage.getItem('user_jwt');
    window.location.reload();
    if (removed) {


        if (!token) {
            loggedIn.style.display = 'none';
            for (let n in notLoggedIn) {
                notLoggedIn[n].style.display = "block";
            }
        }
    }

}