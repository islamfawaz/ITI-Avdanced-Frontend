function askUserInfo() {
    var numUsers = parseInt(prompt("Enter number of users:"));
    if (isNaN(numUsers) || numUsers <= 0) {
        alert("Please enter a valid number of users.");
        return;
    }

    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = '';

    let users = [];

    for (let i = 0; i < numUsers; i++) {
        let name = prompt(`Enter name for user ${i + 1} (3-9 characters):`);
        while (name.length < 3 || name.length > 9) {
            alert("Name should be between 3 and 9 characters.");
            name = prompt(`Enter name for user ${i + 1} (3-9 characters):`);
        }

        let age = parseInt(prompt(`Enter age for user ${i + 1} (10-78):`));
        while (isNaN(age) || age < 10 || age > 78) {
            alert("Age should be between 10 and 78.");
            age = parseInt(prompt(`Enter age for user ${i + 1} (10-78):`));
        }

        users.push({ name, age });
    }

    displayUsers(users);
}

function displayUsers(users) {
    const userInfoDiv = document.getElementById('userInfo');
    let cartona = '<table>';

    cartona += '<tr><th>Name</th><th>Age</th></tr>';

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        cartona += '<tr>';
        cartona += `<td>${user.name}</td>`;
        cartona += `<td>${user.age}</td>`;
        cartona += '</tr>';
    }

    cartona += '</table>';

    userInfoDiv.innerHTML = cartona;
}
