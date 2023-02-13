// Define a class and property, function.

class App{

    name="ABC XYZ";  //property

    getName()       //define function in class
    {
        console.warn(this.name)
    }
}

let a1 = new App();   //create a object of class.
a1.getName();