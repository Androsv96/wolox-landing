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

export function filterTechs(techs, techToFind, techType, orderBy) {

    let filteredTechs = [];

    const techNameReg = new RegExp(techToFind.toLowerCase());
    const techTypeReg = new RegExp(techType.toLowerCase());

    filteredTechs = techs.filter(data => techNameReg.test(data.tech.toLowerCase()) && techTypeReg.test(data.type.toLowerCase()));

    if (orderBy === "ASC") filteredTechs.sort((a, b) => (a.tech.toLowerCase() > b.tech.toLowerCase()) ? 1 : ((b.tech.toLowerCase() > a.tech.toLowerCase()) ? -1 : 0));
    else filteredTechs.sort((a, b) => (a.tech.toLowerCase() > b.tech.toLowerCase()) ? -1 : ((b.tech.toLowerCase() > a.tech.toLowerCase()) ? 1 : 0));

    return filteredTechs;
}