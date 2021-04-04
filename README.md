# bytesse
Utility to generate a Java Byte[] like Array. 

Every element of the generated array is store as an Int8 number rather than an UInt8 number
( i.e. it ranges from -128 to 127 instead of 0-255 ).

**Why not use Buffer.readInt8?**

Our aim is to view the value of these bytes-array directly and clearly, which make our debug jobs in a specific 
project easier (and more comfortable).

## Installation
This is a Node.js module available through the npm registry. Installation is done using the npm install command:
```
npm install bytesse
```

## Requirement
Any Node.js version that supports ECMA Script 6.

## Usage
```javascript
const Bytes = require('bytesse');

let b_arr = Bytes.from([1,2,3,4,5,6,7,8]);

let b_str = Bytes.from("Good good study, day day up!");

let b_0s = Bytes.alloc(16);

let b_1s = Bytes.alloc(16,1);

let b_o = Bytes.from([128,129,130,1000]);
let buff_o = Buffer.from([128,129,130,1000]);

console.log(b_o) 
// => Bytes { Array: [ -128, -127, -126, -24 ] }
console.log(buff_o) 
// => <Buffer 80 81 82 e8>
```

Generally, its apis are similar to the `Buffer` of **Node.js**. Besides, you can access the elements of the 
generated array via its index.

```javascript
const Bytes = require('bytesse');

let b = Bytes.alloc(16,127);
console.log(b[0]);
// => 0
b[0] = 128;
console.log(b[0]);
// => -128
console.log(b);
/* =>Bytes {
       Array: [
         -128, 127, 127, 127,
          127, 127, 127, 127,
          127, 127, 127, 127,
          127, 127, 127, 127
       ]
     }
*/
```
