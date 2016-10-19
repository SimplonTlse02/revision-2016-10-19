parseInt("8", 10); // système décimal : 0->9
// 8
parseInt("1000", 2); // système binaire : 0 et 1
// = 2^3*1 + 2^2*0 + 2^1*0 + 2^0*0
// = 8*1   + 4*0   + 2*0   + 1*0
// = 8

console.log(parseInt("8",10));


console.log(parseInt("01000"));
console.log(parseInt("1000",2));

console.log(parseInt("1000",10));
console.log(parseInt("1000"));

console.log(parseInt("0x1000"));
console.log(parseInt("1000", 16));


console.log(parseInt("FF", 16));
