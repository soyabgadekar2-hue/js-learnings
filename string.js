//String creation methods

let fname="My name is Soyab";
let name1="Gadekar"
// let fname=new String("My name is soyab");

// let name1 = `My 
// name 
// is 
// soyab`;

console.log(fname);
console.log(name1)


//Operations with string

console.log(fname.length);
console.log(`${fname} ${name1}`);
console.log(fname+ " " + name1);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
let a=fname.substring(3,7);
console.log(a);
console.log(fname.replace("Soyab","Shoaib"));
console.log(fname.split(" "));
console.log(fname.charAt(3));
console.log(fname.indexOf("Soyab"));