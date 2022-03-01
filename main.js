// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
const isAdmin = (user) => {
  return user.userRole === "ADMIN" ? true : false;
};

const getEmail = (user) => {
  return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`;
};

const getPlaylistLength = (playList) => {
  return playList.songs.length;
};

const getHardestHomework = (average) => {
  let hardest = "";
  let highest = Infinity;
  for (const score of average) {
    if (score.averageScore < highest) {
      highest = score.averageScore;
      hardest = score.name;
    }
  }
  return hardest;
};

const createPhonebook = (names, numbers) => {
  const phonebook = {};

  for (let i = 0; i < names.length; i++) {
    // const name = names[i];
    // const number = numbers[i];
    phonebook[names[i]] = numbers[i];
  }
  return phonebook; 
};

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
