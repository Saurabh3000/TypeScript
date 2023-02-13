class Parent{                     // Parent class.

    name;                          //Parent class property name.

    setName(name)               //Parent class function.
    {
        this.name = name;
    }
}
class Child extends Parent{         // Child class inherited from parent class.

    getName()
    {
        return this.name;
    }
}

let c1 = new Child();               //Object of child class.

c1.setName("XYZ");

console.warn(c1.getName());