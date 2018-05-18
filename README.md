
<!--#echo json="package.json" key="name" underline="=" -->
split-array-by-const
====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Split an array into multiple ones, using a custom value as the separator.
<!--/#echo -->


API
---

This module expoers one function:

### splitArrayByConst(a, c)

Returns an array of (potentially empty) arrays, each with
items found in `a` before, between, and after each occurrences of `c`.



Usage
-----

from [usage.js](usage.js):

<!--#include file="usage.js" outdent="  " code="javascript"
  start="  // #BEGIN# usage demo" stop="  // #ENDOF# usage demo" -->
<!--#verbatim lncnt="18" -->
```javascript
var split = require('split-array-by-const'), a;
a = [
  'hello', 'world', null,
  { foo: 'bar' }, null,
  [ 12, 34, null, 56 ], null,
  null,
  true, { qux: null }, null,
];
equal(split(a, null), [
  [ 'hello', 'world' ],
  [ { foo: 'bar' } ],
  [ [ 12, 34, null, 56 ] ],
  [],
  [ true, { qux: null } ],
  [],
]);
```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
