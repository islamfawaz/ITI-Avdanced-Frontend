document.addEventListener('DOMContentLoaded', function() {
    var originalDiv = document.querySelector('.original-div');
    var container = document.querySelector('.container');

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 15)];
        }
        return color;
    }

    originalDiv.addEventListener('click', function() {
        var clonedDiv = originalDiv.cloneNode(true);
        clonedDiv.style.backgroundColor = getRandomColor();
        clonedDiv.classList.add('cloned-div');
 
        container.insertBefore(clonedDiv, originalDiv.nextSibling);
    });
});
