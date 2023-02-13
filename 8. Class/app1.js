var App1 = /** @class */ (function () {
    function App1() {
        this.name = "XYZ ABC"; //define type of property.
    }
    App1.prototype.getName = function () {
        return this.name;
    };
    return App1;
}());
var a2 = new App1();
console.warn(a2.getName());
