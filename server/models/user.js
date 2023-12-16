const allUsers = JSON.stringify(users);
const getUsers = () => users;

const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS users (
      UserId INT NOT NULL AUTO_INCREMENT,
      UserName VARCHAR(25) NOT NULL,
      Password VARCHAR(255) NOT NULL,
      Email VARCHAR(255) NOT NULL,
      CONSTRAINT UserPK PRIMARY KEY(UserId));`

  await con.query(sql);
}

createTable()

async function getUser(userName) {
  let sql = `
    SELECT * FROM users 
    WHERE userName = "${userName}" 
  `
  return await con.query(sql);
}

async function login(user) {
  let userResult = await getUser(user.userName);
  if (!userResult[0]) throw Error("Username not found");
  if (userResult[0].Password != user.password) throw Error("Password Incorrect");
  return userResult[0];
}

async function register(user) {
  let userResult = await getUser(user.userName);
  if (userResult.length > 0) throw Error("Username already in use");

  let sql = `
    INSERT INTO users(UserName, Password, Email)
    VALUES("${user.userName}", "${user.password}", "${user.email}")
  `

  await con.query(sql);
  const newUser = await getUser(user.userName);
  return newUser[0];
}

async function editUser(user) {
  let updatedUser = await getUser(user.userName);
  if (updatedUser.length > 0) throw Error("Username not available");

  let sql = `UPDATE users
    SET UserName = "${user.userName}"
    WHERE UserId = ${user.UserId}
  `
  await con.query(sql);
  updatedUser = await getUser(user.userName);
  return updatedUser[0];
}

async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE UserId = ${user.UserId}
  `
  await con.query(sql);
}

module.exports = { login, register, editUser, deleteUser }