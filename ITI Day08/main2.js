function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.calculateArea = function() {
        return this.width * this.height;
    };


    this.calculatePerimeter = function() {
        return 2 * (this.width + this.height);
    };


    this.displayInfo = function() {
        var area = this.calculateArea();
        var perimeter = this.calculatePerimeter();
        var info = `Width: ${this.width}, Height: ${this.height}, Area: ${area}, Perimeter: ${perimeter}`;
        document.getElementById('rectangleInfo').textContent = info;
    };
}


function createAndDisplayRectangle() {
    var myRectangle = new Rectangle(20, 40);
    myRectangle.displayInfo();
}