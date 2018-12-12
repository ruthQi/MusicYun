/*
方式1：
function greeter(person){
   return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

*/

//执行tsc test.ts生成一个js文件

/*
方式2：
interface Person{
   firstName: string;
   lastName: string;
}

function greeter(person:Person) {
   return "Hello " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: 'User'}

document.body.innerHTML = greeter(user);
*/


class Student{
   fullName: string;
   constructor(public firstName, public middleInitial, public lastName){
      this.fullName = firstName + " " + middleInitial + " " + lastName;
   }
}
//编译后的js文件格式
// function Student(firstName, middleInitial, lastName){
//    this.firstName = firstName;
//    this.middleInitial = middleInitial;
//    this.lastName = lastName;
//    this.fullName = firstName + " " + middleInitial + " " + lastName;
// }

interface Person{
   firstName: string;
   lastName: string;
}

function greeter(person: Person){
   return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

