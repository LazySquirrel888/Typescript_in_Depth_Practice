// Task 06.01
// 1. NamespaceDemo directory created
// 2. utility-functions.ts created
// 3.
var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBookAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBookAllowed = maxBookAllowed;
    function privateFunc() {
        console.log('this is private function');
    }
})(Utility || (Utility = {}));
// 4. Fees namespace created
// 5. calculateLateFee() created and exported
// 6. maxBooksAllowed() implemented in Utility namespace
// 7. privateFunc() method added
// 8. app.ts added with reference to utility-functions.ts
// 9. code using namespace methods implemented in app.ts
// 10. util alias declared for inner namespace
// 11. app.ts compiled using tsc app.ts --target ES5; index.html added
// 12. compiled with --outFile bundle.js
/// <reference path="utility-functions.ts" />
var result1 = Utility.Fees.calculateLateFee(10);
console.log(result1);
var util = Utility.Fees;
var result2 = util.calculateLateFee(20);
console.log(result2);
