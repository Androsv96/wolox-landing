export function saveToken(token) {
    localStorage.setItem("token", token);
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getToken() {
    return localStorage.getItem("token", "");
}

export function clearStorage() {
    localStorage.clear();
}