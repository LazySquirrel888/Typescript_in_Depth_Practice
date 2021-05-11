// Task 06.01

// 1. NamespaceDemo directory created
// 2. utility-functions.ts created
// 3.
namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }

    export function maxBookAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunc(): void {
        console.log('this is private function');
    }
}

// 4. Fees namespace created
// 5. calculateLateFee() created and exported
// 6. maxBooksAllowed() implemented in Utility namespace
// 7. privateFunc() method added
// 8. app.ts added with reference to utility-functions.ts
// 9. code using namespace methods implemented in app.ts
// 10. util alias declared for inner namespace
// 11. app.ts compiled using tsc app.ts --target ES5; index.html added
// 12. compiled with --outFile bundle.js; bundle.js connected to index.html

