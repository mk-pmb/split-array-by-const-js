/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
function splitArrayByConst(a, c) {
  if (!a) { return false; }
  var b = [], r = [b], i, n = a.length, x;
  if (!Number.isFinite(n)) { return false; }
  for (i = 0; i < n; i += 1) {
    x = a[i];
    if (x === c) {
      b = [];
      r.push(b);
    } else {
      b.push(x);
    }
  }
  return r;
}
module.exports = splitArrayByConst;
