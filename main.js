// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function isAdmin (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].userRole === "ADMIN") {
      return true;
    } else {
      return false;
    }
  }
  return str.userRole
}

getEmail = (str) => {

}

getPlaylistLength = (str) => {

}

getHardestHomework = (str) => {

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
