var Example = /** @class */ (function () {
    function Example(normalElement) {
        this.normalElement = normalElement;
    }
    // Normal method (instance member)
    Example.prototype.showNormal = function () {
        console.log("Normal Element: " + this.normalElement);
    };
    // Static method (class member)
    Example.showStatic = function () {
        console.log("Static Element: " + this.staticElement);
    };
    return Example;
}());
// Creating instances of the class
var instance1 = new Example("Instance 1 Element");
var instance2 = new Example("Instance 2 Element");
// Accessing normal elements and methods
console.log(instance1.normalElement); // Output: Instance 1 Element
console.log(instance2.normalElement); // Output: Instance 2 Element
instance1.showNormal(); // Output: Normal Element: Instance 1 Element
instance2.showNormal(); // Output: Normal Element: Instance 2 Element
// Accessing static elements and methods
Example.staticElement = "Shared Static Element";
Example.showStatic(); // Output: Static Element: Shared Static Element
