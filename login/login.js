let usernameInput = prompt("Enter username:");
let passwordInput = prompt("Enter password:");
function login(username, password) {
    const correctUsername = "admin";
    const correctPassword = "aidai123";

    if (username.toLowerCase() === correctUsername) {
        if (password === correctPassword) {
            return "Login successful!";
        } else {
            return "Incorrect password. Try again.";
        }
    } else {
        return "User not found.";
    }
}
alert(login(usernameInput, passwordInput));