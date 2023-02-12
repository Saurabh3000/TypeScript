// without giving type of users object it get automatically defulat type.
var users = {
    name: 'Saurabh',
    age: 23,
    address: 'USA'
};
console.warn(users);
// change the value of name property.
users.name = "Chavan";
console.warn(users);
var user = {
    name1: 'Patil',
    age1: 25,
    address1: 'UK'
};
console.warn(user);
//we use any for type of object.
var use = {
    name2: 'XYZ',
    age2: 30,
    address2: 'Canada'
};
use.name2 = 'abc';
console.warn(use);
use.name2 = 300;
console.warn(use);
