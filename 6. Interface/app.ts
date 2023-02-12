//interface is templet in this we already define the datatype of proporty.

interface userType{
    name:string;
    age:number
}

let users:userType = {
    name: 'Xyz',
    age:30
}
console.warn(users);