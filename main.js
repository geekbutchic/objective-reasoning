// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
isAdmin = (user) => {
    if (user.userRole === "ADMIN") {
        return true;
    } else {
        return false;
    }
}
// => return codeimmersives email 
getEmail = (object) => {
    console.log(object.firstName);
    console.log(object.lastName);
    return object.firstName.toLowerCase() + "." + object.lastName.toLowerCase() + "@codeimmersives.com"
}

getPlaylistLength = (playlistObject) => {
    return playlistObject.songs.length;
}

getHardestHomework = (homeworks) => {
    console.log(homeworks);
    let lowestAverageScore = Infinity;
    let nameOfHardest = '';

    for (const item of homeworks) {
        // console.log(item);
        // console.log(item.name);
        // console.log(item.averageScore);
        if (item.averageScore < lowestAverageScore) {
            nameOfHardest = item.name;
            lowestAverageScore = item.averageScore
        }
    }
    return nameOfHardest;
}

// function getHardestHomework (grade) {
//     let hardestName = "";
//     let highestPos = 100;
//     for (const score of grade) {
//         if (score.averageScore < highestPos) {
//             highestPos = score.averageScore;
//             hardestName = score.name;
//         }
//     }
//     return hardestName;
// }

function getHardestHomework (arr) {
    let homework = ''
    let num = []
        for (const work of arr){
            num.push(work.averageScore)
        } 
        const i = num.indexOf(Math.min.apply(null,num))
        if (arr[i]!==undefined){
        homework = arr[i].name
        } else {
            homework = ''
        }
    return homework
}



createPhonebook = (str) => {

}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === "undefined") {
  isAdmin = undefined;
}
if (typeof getEmail === "undefined") {
  getEmail = undefined;
}
if (typeof getPlaylistLength === "undefined") {
  getPlaylistLength = undefined;
}
if (typeof getHardestHomework === "undefined") {
  getHardestHomework = undefined;
}
if (typeof createPhonebook === "undefined") {
  createPhonebook = undefined;
}

module.exports = {
  isAdmin,
  getEmail,
  getPlaylistLength,
  getHardestHomework,
  createPhonebook,
};
