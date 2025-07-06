const accountId = 8887756715;
let accountEmail ="sn.shivamni@gmail.com";
var accountPassword = "Shrihari@123";
accountCity = "Kanpur";
let accountState;

//accountId = 6387023796; // This will throw an error because accountId is a constant(we can not change the value of the constant variale)
console.log(accountId);


accountEmail ="2k23.mca23136722@gmail.com"; // This is allowed because accountEmail is a let variable and we can change its value
console.log(accountEmail);

accountPassword = "Shivam@1234"; // This is allowed because accountPassword is a var variable and we can change its value
console.log(accountPassword);

accountCity = "Delhi"; // This is allowed because accountCity is a global variable and we can change its value
console.log(accountCity);



console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.log(typeof accountId);

/*

Note: In JavaScript, we can declare variables using var, let, and const.
- var: Function scoped or globally scoped, can be re-declared and updated.
- let: Block scoped, can be updated but not re-declared in the same scope.
- const: Block scoped, cannot be updated or re-declared, must be initialized at the time of declaration.
- Global variables can be declared without var, let, or const, but it's not recommended as it can lead to unexpected behavior and conflicts in larger codebases.

Best practices:
1. Use const for variables that should not change.
2. Use let for variables that will change.
3. Avoid using var to prevent issues with variable hoisting and scope.

*/

