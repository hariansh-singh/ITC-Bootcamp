class Example {
    // Normal element (instance member)
    normalElement: string;
  
    // Static element (class member)
    static staticElement: string;
  
    constructor(normalElement: string) {
      this.normalElement = normalElement;
    }
  
    // Normal method (instance member)
    showNormal() {
      console.log("Normal Element: " + this.normalElement);
    }
  
    // Static method (class member)
    static showStatic() {
      console.log("Static Element: " + this.staticElement);
    }
  }
  
  // Creating instances of the class
  const instance1 = new Example("Instance 1 Element");
  const instance2 = new Example("Instance 2 Element");
  
  // Accessing normal elements and methods
  console.log(instance1.normalElement); // Output: Instance 1 Element
  console.log(instance2.normalElement); // Output: Instance 2 Element
  instance1.showNormal(); // Output: Normal Element: Instance 1 Element
  instance2.showNormal(); // Output: Normal Element: Instance 2 Element
  
  // Accessing static elements and methods
  Example.staticElement = "Shared Static Element";
  Example.showStatic(); // Output: Static Element: Shared Static Element
  