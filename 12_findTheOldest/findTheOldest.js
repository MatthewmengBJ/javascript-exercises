const findTheOldest = function(people_list) {
    let age = people_list[0].yearOfDeath - people_list[0].yearOfBirth;
    let old = age;
    let names;
    names = people_list[0].name;
    let result;
    for (i = 1; i<people_list.length;i++){
        age = people_list[i].yearOfDeath - people_list[i].yearOfBirth;
        console.log("age is",age);

        if (old < age){
            old = age;
            names = people_list[i].name;
        }

    }
    console.log(names);
    document.write(names);
    return names;

};

// Do not edit below this line
module.exports = findTheOldest;
