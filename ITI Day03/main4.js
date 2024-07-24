document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', function() {

        let values = [];
        for (let i = 0; i < 3; i++) {
            let value = parseFloat(prompt(`Enter value ${i + 1}:`));
            if (!isNaN(value)) {
                values.push(value);
            } else {
                alert("Please enter a valid number.");
                return;
            }
        }

        let sum = values.reduce((a, b) => a + b, 0);
        let multiplication = values.reduce((a, b) => a * b);
        let division = values.reduce((a, b) => a / b);

        let output = `
            <h2>Adding -- Multiplying -- and dividing 3 values</h2>
            <hr>
            <p>sum of the 3 values ${values.join(' + ')} = ${sum}</p>
            <p>multiplication of the 3 values ${values.join(' * ')} = ${multiplication}</p>
            <p>division of the 3 values ${values.join(' / ')} = ${division}</p>
        `;

        document.getElementById('output').innerHTML = output;
    });
});
