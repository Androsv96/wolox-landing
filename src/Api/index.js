import { GET_METHOD, REQUEST_HEADERS } from "../Utils/Constants";

export default async function apiCall(url, method, data) {

	let newUrl = new URL(url);
	if (method === GET_METHOD) {

		if (data) Object.keys(data).forEach(key => newUrl.searchParams.append(key, data[key]));

		return await fetch(newUrl, {
			headers: REQUEST_HEADERS,
			method,
		}).then(response => response.json());

	} else {

		return await fetch(newUrl, {
			body: JSON.stringify(data),
			headers: REQUEST_HEADERS,
			method
		}).then(response => response.json());

	}

}