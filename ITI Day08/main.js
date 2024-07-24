function openChildWindow() {
    var childWindow = window.open("", "childWindow", "width=300,height=200");
    childWindow.document.write("<html><head><title>Child Window</title><link rel='stylesheet' href='style.css'></head><body><p id='message'></p></body></html>");
    childWindow.document.close();

    var message = "Welcome!";
    var index = 0;

    function showMessage() {
        if (index < message.length) {
            childWindow.document.getElementById('message').innerHTML += message.charAt(index);
            index++;
            setTimeout(showMessage, 500);
        }
    }

    showMessage();

    setTimeout(function() {
        childWindow.close();
    }, 5000);
}
