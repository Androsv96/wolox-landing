import Hour from "../../Assets/Images/benefits/Ic_Hour.svg";
import HomeOffice from "../../Assets/Images/benefits/Ic_HomeOffice.svg";
import Workshops from "../../Assets/Images/benefits/Ic_Workshops.svg";
import DrinkSnacks from "../../Assets/Images/benefits/Ic_DrinkSnacks.svg";
import Laptop from "../../Assets/Images/benefits/Ic_laptop.svg";
import Brain from "../../Assets/Images/benefits/Ic_brain.svg";

export const POST_METHOD = "POST";
export const GET_METHOD = "GET";
export const REQUEST_HEADERS = { "Content-Type": "application/json", };

export const SIGNUP_URL = "https://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup";
export const TECHS_URL = "https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs";

export const WOLOX_TWITTER_URL = "https://twitter.com/Wolox";
export const WOLOX_WEB_PAGE = "https://www.wolox.com.ar";

export const SPANISH_LANGUAGE_CODE = "es";
export const ENGLISH_LANGUAGE_CODE = "en";
export const CURRENT_LANGUAGES = {
	[SPANISH_LANGUAGE_CODE]: "Español",
	[ENGLISH_LANGUAGE_CODE]: "English"
};

export const ARGENTINA_ID = "ar";
export const CHILE_ID = "ch";
export const COLOMBIA_ID = "co";
export const MEXICO_ID = "me";
export const PERU_ID = "pe";
export const COUNTRIES = [
	{ id: ARGENTINA_ID, name: "Argentina" },
	{ id: CHILE_ID, name: "Chile" },
	{ id: COLOMBIA_ID, name: "Colombia" },
	{ id: MEXICO_ID, name: "México" },
	{ id: PERU_ID, name: "Perú" },
];
export const PROVINCES = {
	[ARGENTINA_ID]: ["Buenos aires", "Misiones", "Pampa", "Chaco", "Entre Ríos"],
	[CHILE_ID]: ["Arica", "Parinacota", "Iquique", "Tamarugal", "Tocopilla"],
	[COLOMBIA_ID]: ["Antioquia", "Atlántico", "Bolívar", "Boyacá", "Valle del Cauca"],
	[MEXICO_ID]: ["Estado de México", "Jalisco", "Michoacán", "Nuevo León", "Yucatán"],
	[PERU_ID]: ["Chachapoyas", "Bagua", "Bongara", "Condorcanqui", "Luya"],
};

export const ROUTES = {
	home: "/home/",
	signup: "/signup/",
	techs: "/techs/",
	terms: "/terms/"
};
export const SCROLLABLE_SECTIONS = {
	greetings: "#greetings",
	benefits: "#benefits"
};
export const BENEFITS = [
	{
		icon: Hour,
		label: "Flexibilidad Horaria",
	},
	{
		icon: HomeOffice,
		label: "Home Office",
	},
	{
		icon: Workshops,
		label: "Capacitaciones y Workshops"
	},
	{
		icon: DrinkSnacks,
		label: "Snacks, frutas y bebidas gratis"
	},
	{
		icon: Laptop,
		label: "Semana Remota"
	},
	{
		icon: Brain,
		label: "Trabajar en últimas tecnologías"
	}
];