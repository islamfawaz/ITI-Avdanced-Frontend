document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    const messageDiv = document.getElementById('message');

    document.getElementById('validateBtn').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const email = document.getElementById('email').value;

        let message = '';


        if (!/^[A-Za-z]+$/.test(name)) {
            message += 'Name should be characters only.<br>';
        }


        if (!/^\d{8}$/.test(phoneNumber)) {
            message += 'Phone Number should be an 8-digit number.<br>';
        }

         if (!/^(010|011|012)\d{8}$/.test(mobileNumber)) {
            message += 'Mobile Number should be 11 digits and start with 010, 011, or 012.<br>';
        }


        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            message += 'Email should be in the correct format (abc@123.com).<br>';
        }

        if (message === '') {
            message = `Welcome, ${name}! Your details have been validated successfully.`;
        }

        messageDiv.innerHTML = message;
    });
});
