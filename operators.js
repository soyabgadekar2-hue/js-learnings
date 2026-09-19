// Arithmatic operators
console.log("Arithmatic operators")
let a = 10;
let b = 5;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)


// Assignment operators
console.log("Assignment operators")
let c = 10;
let d = 10;
d += 5;
let e = 10;
e -= 2;
let f = 10;
f *= 2;
let g = 10;
g /= 2;

console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

// Comparision operators
console.log("Comparision operators")
console.log(10 == '10')
console.log(10 === '10')
console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= 5)
console.log(10 <= 5)
console.log(10 != '10')
console.log(10 !== '10')

// Ternary Operator
console.log("Ternary Operator")
let age=10;
(age>18)?console.log("You can vote"):console.log("You cannot vote")
//Logical operators
console.log("Logical operators")
let user = "John";
let pass = "1234";

console.log(user=="John" && pass =="1234")
console.log(user=="John" || pass =="1234")
console.log(!(user=="John" || pass =="1234"))

console.log("Working with Non booleans")
console.log("soyabg" && "soyab1")
console.log("" || "soyab")
console.log(!("" || "soyab"))

console.log("Bitwise operators")
console.log(7 & 4)
console.log(7 | 4)
console.log(~(7 | 4))
console.log(7 ^ 4)
console.log(9 >> 1)
console.log(7 << 4)