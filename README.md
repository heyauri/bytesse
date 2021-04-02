# bytesse
Utility to generate a Java Byte[] like Array. 

## Installation
This is a Node.js module available through the npm registry. Installation is done using the npm install command:
$ npm install bytesse

## Requirement
Any Node.js version that supports ECMA Script 6.

## Usage
```javascript
const Bytes = require('bytes');

let b_arr = Bytes.from([1,2,3,4,5,6,7,8]);

let b_str = Bytes.from("Good good study, day day up!");

let b_0s = Bytes.alloc(16);

let b_1s = Bytes.alloc(16,1);
```
