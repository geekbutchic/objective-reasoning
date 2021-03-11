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
    let smallest = 100;
    let output = '';

    for (const item of homeworks) {
        // console.log(item);
        // console.log(item.name);
        // console.log(item.averageScore);
        if (item.averageScore < smallest) {
            output = item.name;
            smallest = item.averageScore
        }
    }
    return output;
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
