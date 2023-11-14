function register(e) {
    e.preventDefault();
    const user = {
        userId: Number(Math.random().toString().slice(2, 8)),
        firstName: document.getElementById("first name").value,
        lastName: document.getElementById("last name").value,
        email: document.getElementById("email").value,
        password: hashCode(document.getElementById("password").value)
    };
    console.log(user);
}

function login(e) {
    e.preventDefault();
    const loginInput = {
        email: document.getElementById("email").value,
        password: hashCode(document.getElementById("password").value)
    };
    console.log(loginInput);
    ///
    // Validation will go here
    //
}

function hashCode(s) {
    var h = 0, l = s.length, i = 0;
    if (l > 0)
        while (i < l)
            h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
};

window.onload = () => {

    if (document.getElementById('registerForm')) {
        let registerForm = document.getElementById("registerForm");
        registerForm.addEventListener("submit", register);
    }

    if (document.getElementById('loginForm')) {
        let loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", login);
    }

}