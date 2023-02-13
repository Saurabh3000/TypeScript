class App1{

    name:string="XYZ ABC";      //define type of property.

    getName():string            //define type of function.
    {
        return this.name;
    }
}

let a2 = new App1();
console.warn(a2.getName())