document.addEventListener('DOMContentLoaded', function() {
    let Input = prompt("Enter a string:");

    let countNumberE = (str) => {
        return str.split('').filter(char => char.toLowerCase() === 'e').length;
    };

    let eCount = countNumberE(Input);

    console.log(`The No of 'e' characters in the string  ${eCount}`);
});
