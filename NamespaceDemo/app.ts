/// <reference path="utility-functions.ts" />
const result1 = Utility.Fees.calculateLateFee(10);
console.log(result1);

import util = Utility.Fees;
const result2 = util.calculateLateFee(20);
console.log(result2);
