function createPersonInfo(hobbyOne, hobbyTwo, hobbyThree) {

    let hobbies = [];
    hobbies.push(hobbyOne, hobbyTwo, hobbyThree);
    //console.log(hobbies);

    const personInfo = { hobbies };
    //console.log(personInfo);

    return personInfo;
}


module.exports = createPersonInfo;