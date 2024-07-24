document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function ShowDate() {
    let input = document.getElementById('birthDateInput').value;

     if (input.length === 10 && input[2] === '-' && input[5] === '-') {
         let day = input.substring(0, 2);
        let month = input.substring(3, 5) - 1; 
        let year = input.substring(6, 10);


        let birthDate = new Date(year, month, day);

        let dayName = getDayName(birthDate);

        showModal("Your birth date is: " + birthDate.toDateString() + " (" + dayName + ")");
    } else {

        showModal("Wrong Date Format");
    }
}

function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";
}


function getDayName(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}
