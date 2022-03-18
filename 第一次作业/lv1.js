// function sum(a, b, c) {
//     return a + b + c;
// }

// const curry = function (fn) {
//     let args = [];
//     return function () {
//         Array.prototype.push.apply(args,[...arguments]);
//         if (args.length >= 3) {
//             //args = Array.prototype.slice.call(arguments);
//             var copy=[];
//             copy=args;
//             args=[];

//             return fn(...copy);
            
//         }
//         else {
//             return arguments.callee;
//         }
//     }
// }
// let curriedSum = curry(sum);
// alert(curriedSum(1, 2, 3));
// alert(curriedSum(1)(2, 3));
// alert(curriedSum(1)(2)(3));
