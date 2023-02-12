
// without giving type of users object it get automatically defulat type.
let users = {
    name:'Saurabh',
    age:23,
    address:'USA',
}
console.warn(users)

// change the value of name property.
users.name = "Chavan";
console.warn(users)


//we define the default type of users object.

interface userTyped{
    name1:string;
    age1:number;
    address1:string;
}

let user:userTyped={
    name1:'Patil',
    age1:25,
    address1:'UK',
}
console.warn(user)


//we use any for type of object.

let use:any={
    name2:'XYZ',
    age2:30,
    address2:'Canada',
}

use.name2= 'abc';
console.warn(use)
use.name2= 300;
console.warn(use)