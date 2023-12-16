let nav = document.querySelector("nav");

export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
        method: methodType, // *POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    }
}

export function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
}

export function removeCurrentUser() {
    localStorage.removeItem('user')
    window.location.href = "login.html"
}

let logoutBtn = document.getElementById("logout")
if (logoutBtn) logoutBtn.addEventListener("click", logout)