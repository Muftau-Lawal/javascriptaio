const user = { username: "funguy37", password: "123456" };

const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
  if (userCredentials === "123456") {
    let randomString = Math.random().toString(36).slice(-6);
    userCredentials.password = randomString;
    return `Terrible password. Your password has been reset to a random string.`;
  }
  return "logged In";
}
