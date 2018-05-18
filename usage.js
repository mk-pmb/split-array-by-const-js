/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var equal = require('assert').deepStrictEqual;

(function readmeDemo() {
  // #BEGIN# usage demo
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
  // #ENDOF# usage demo
}());









console.log("+OK usage demo test passed.");   //= "+OK usage demo test passed."
