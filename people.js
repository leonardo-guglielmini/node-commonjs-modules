const createPerson = require("./names.js");
const createPersonInfo = require("./hobbies.js");

function profilePerson() {

    const fistName = "Gerry", lastName = "Scotti";
    const hobbyOne = "Anime", hobbyTwo = "Manga", hobbyThree = "Coding";

    let personFullName = createPerson(fistName, lastName);
    let personInfo = createPersonInfo(hobbyOne, hobbyTwo, hobbyThree);

    let person = { ...personFullName, ...personInfo };
    return person;

}

module.exports = profilePerson;
