var images = ['download (2).jpg', 'download (3).jpg', 'download.jpg', 'download (1).jpg'];
let index = 0;
let interval;

function updateImage() {
    var imgElement = document.getElementById('currentImage');
    imgElement.src = images[index];
}

document.getElementById('Next').addEventListener('click', function() {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateImage();
});

document.getElementById('Prev').addEventListener('click', function() {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    updateImage();
});

document.getElementById('Slide').addEventListener('click', function() {
    interval = setInterval(function() {
        index = (index + 1) % images.length;
        updateImage();
    }, 1000);
});

document.getElementById('Stop').addEventListener('click', function() {
    clearInterval(interval);
});
