const users = new Map();

const userID = 100;

const user = {
  userID: 100,
  fullName: 'Nathan Mark',
  email: 'nathanmark@gmail.com',
  farmName: 'CowFarm',
  country: 'Nigeria',
  province: 'plateau',
  password: 1234,
};

users.set(user.userID, user);

module.exports = {
  users,
};
