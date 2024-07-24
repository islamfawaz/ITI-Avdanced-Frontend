document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateAreaBtn').addEventListener('click', function() {
        let radius = prompt("Enter the value of the circle’s radius:");
        radius = parseFloat(radius);
        
        if (!isNaN(radius) && radius > 0) {
            let area = Math.PI * Math.pow(radius, 2);
            console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
        } else {
            console.log("Please enter a valid positive number for the radius.");
        }
    });

    document.getElementById('calculateSquareRootBtn').addEventListener('click', function() {
        let value = prompt("Enter a value to calculate its square root:");
        value = parseFloat(value);
        
        if (!isNaN(value) && value >= 0) {
            let sqrtValue = Math.sqrt(value);
            alert(`The square root of ${value} is ${sqrtValue.toFixed(2)}`);
        } else {
            alert("Please enter a valid non-negative number.");
        }
    });
});
