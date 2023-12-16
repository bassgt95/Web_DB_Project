import { fetchData, setCurrentUser } from "./main.js"

function register(e) {
    e.preventDefault();
    const user = {
        userId: Number(Math.random().toString().slice(2, 8)),
        userName: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: hashCode(document.getElementById("password").value)
    };
    console.log(user);
}

function login(e) {
    e.preventDefault();

    const user = {
        email: document.getElementById("email").value,
        password: hashCode(document.getElementById("password").value)
    };
    console.log(user);

    fetchData("/users/login", user, "POST")
        .then(data => {
            if (!data.message) {
                setCurrentUser(data);
                window.location.href = "index.html"
            }
        }).catch(err => {
            let errorSection = document.querySelector("#login-form .error")
            errorSection.innerText = err.message
            document.getElementById("username").value = ""
            document.getElementById("pswd").value = ""
        })
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