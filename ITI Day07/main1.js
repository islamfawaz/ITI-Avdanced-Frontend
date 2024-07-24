var users = [];

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let namee = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;

    console.log('Name:', namee);
    console.log('Age:', age);
    console.log('Email:', email);

    users.push({ name: namee, age: age, email: email });

    displayUsers(users);
});

function displayUsers(users) {
    let userInfoDiv = document.getElementById('userInfo');
    let cartona = '<table>';

    cartona += '<tr><th>Name</th><th>Age</th><th>Email</th></tr>';

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        cartona += '<tr>';
        cartona += `<td>${user.name}</td>`;
        cartona += `<td>${user.age}</td>`;
        cartona += `<td>${user.email}</td>`;
        cartona += '</tr>';
    }

    cartona += '</table>';

    userInfoDiv.innerHTML = cartona;
}

document.querySelector('.reset').addEventListener('click', function() {
    document.getElementById('form').reset();
});

document.querySelector('.clear').addEventListener('click', function() {
    document.getElementById('userInfo').innerHTML = '';
    users = []; 
});



