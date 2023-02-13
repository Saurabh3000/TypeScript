// Define a class and property, function.
var App = /** @class */ (function () {
    function App() {
        this.name = "ABC XYZ"; //property
    }
    App.prototype.getName = function () {
        console.warn(this.name);
    };
    return App;
}());
var a1 = new App(); //create a object of class.
a1.getName();
