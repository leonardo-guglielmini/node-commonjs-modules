const createPerson = require("./names.js");
const createPersonInfo = require("./hobbies.js");

function profilePerson() {

    const firstName = "Gerry", lastName = "Scotti";
    const hobbyOne = "Anime", hobbyTwo = "Manga", hobbyThree = "Coding";

    let personFullName = createPerson(firstName, lastName);
    let personInfo = createPersonInfo(hobbyOne, hobbyTwo, hobbyThree);

    let person = { ...personFullName, ...personInfo };
    return person;

}

module.exports = profilePerson;
