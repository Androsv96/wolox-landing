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

export function saveTechs(techs) {
	localStorage.setItem("techs", JSON.stringify(techs));
}

export function getTechs() {
	return JSON.parse(localStorage.getItem("techs") || "[]");
}

export function countFavouritesTechs(techs) {
	let currentCount = techs.reduce((acc, data) => data.checked ? acc + 1 : acc, 0);
	return currentCount;
}