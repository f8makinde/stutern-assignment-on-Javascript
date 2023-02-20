Javascript Operators & Control Flow

List the symbols that for each of the below Javascript operators
1) Arithmetic Operators = -, *, /, %, **, ++, --
console.log(x - y); 
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(++x);
console.log(x++);
console.log(--x);
console.log(x--)

2) Assignment Operators = The assignment operator is the equals sign (=)
  +=
  -=
  *=


3) Comparison Operators = 
The first comparison operator is greater than (>) 
console.log( x >  0);
The second comparison operator is greater than or equal to (>=).
console.log(x >= 1);
The other operators are pretty similar, we have less than (<) and less than or equal to (<=)
console.log(x < 1); 
console.log(x <= 1);
To check if x equals 1, we use the triple equals sign (===)
console.log(x === 1);
To check if x is not equals 1, we use the Not Equals operator represented as !==
console.log(x !== 1); 
4) Logical Operators
The Logical AND returns true if both operands are true. (&&)
This returns  true if one of the operands is true. (||)
NOT operator (!)
5) Bitwise Operators
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
&, |, ^, ~, <<, >>, >>>

5 & 1 = 1
5 | 1 = 5
~ 5 = 10
5 << 1 = 10
For each JavaScript Operator, write 2 examples.


 for(let i = 1; i < 20; i += 7){
    console.log(i)
 }
 Answer = 1, 8, 15