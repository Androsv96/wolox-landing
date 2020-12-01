export const techsMocks = [
    {
        "logo": "",
        "tech": "Android",
        "year": "2008",
        "author": "Google",
        "license": "Apache",
        "language": "Java, Kotlin",
        "type": "Mobile"

    },
    {
        "logo": "",
        "tech": "Node",
        "year": "2009",
        "author": "Ryan Dahl",
        "license": "MIT",
        "language": "JavaScript",
        "type": "Back-End",
        "checked": true
    },
    {
        "logo": "",
        "tech": "React",
        "year": "2013",
        "author": "Jordan Walke",
        "license": "MIT",
        "language": "JavaScript",
        "type": "Front-End"
    },
    {
        "logo": "",
        "tech": "Vue",
        "year": "2014",
        "author": "Evan You",
        "license": "MIT",
        "language": "JavaScript",
        "type": "Front-End",
        "checked": true
    }
];

export const techsFavouritesMocks = ["Node", "Vue"];

export const techsReducerMocks = {
    techs: techsMocks,
    isLoading: false,
    errorLoading: false,
    techToFind: "",
    techType: "",
    orderBy: "ASC",
};