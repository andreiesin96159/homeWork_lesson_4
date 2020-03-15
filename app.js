/**
 * Create function which takes an object (keys - strings, values - number) as argument and sum all values (try to transform obj in array)
 */

// function arr(n) {
//         let arr = Object.values(n);
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//                 sum += arr[i];
//         } return sum;
// }
//
// let obj = {
//         key1: 1,
//         key2: 2,
//         key3: 3,
// };
//
// console.log( arr(obj));



//______________________________________________________________________________________________________________________________________________________________-


/**
 * Create  closure function which takes array as argument and returns function which takes any value as argument and push it into array
 */





// const arrOne = [1,2,3];
// const arrTwo = [3, 2, 1];
//  const makeCoolCounter = list => (n) => list.push(n);
//
// // function makeCoolCounter(list) {
// //     return (n) => list.push(n);
// // }
//
// const counterOne = makeCoolCounter(arrOne);
// const counterTwo = makeCoolCounter(arrTwo);
//
// counterOne(4);
// console.log(arrOne, ' <=== this is first array');
// console.log(arrTwo, ' <=== this is second array');
// counterOne(5);
// console.log(arrOne, ' <=== this is first array');
// console.log(arrTwo, ' <=== this is second array');
// counterTwo(0);
// console.log(arrOne, ' <=== this is first array');
// console.log(arrTwo, ' <=== this is second array');
// counterTwo(-1);
// console.log(arrOne, ' <=== this is first array');
// console.log(arrTwo, ' <=== this is second array');

//______________________________________________________________________________________________________________________________________________________________-


// // 1


// const stringOne = "Some string 1";
// const stringTwo = "Some string 2";
//
// const addToStringGenerator = (string) => {
//  return  n => string + n;
// };
//
//
// const addToStringOne = addToStringGenerator(stringOne);
// const addToStringTwo = addToStringGenerator(stringTwo);
//
//
// console.log(addToStringOne( " Test" )); // Some string 1 Test
// console.log(addToStringTwo( " Test" )); // Some string 2 Test
//
//
//
//
//
//
//
//
////______________________________________________________________________________________________________________________________________________________________-
//
//
//
// // 2
//
//
// const getMultiplier = multiplier => {
//  return  n => multiplier * n;
// };
//
// const doubleMultiplier = getMultiplier(2);
// const tripleMultiplier = getMultiplier(3);
// const quadroMultiplier = getMultiplier(4);
//
// console.log(doubleMultiplier(2)); // 4
// console.log(tripleMultiplier(2)); // 6
// console.log(quadroMultiplier(2)); // 8
//
//




//______________________________________________________________________________________________________________________________________________________________-
//
//
//
//
//
//
// /**
//  * Create function which takes object ({firstName: "Ivan", lastName: "Ivanov", birthYear: 2000})
//  *
//  * and returns object ({firstName: "Ivan", lastName: "Ivanov", birthYear: 2000, fullName:"Ivan Ivanov", age:19}).
//  *
//  * Use destructuring and speead operator for this task.
//  * */
//
// let obj = {firstName: "Ivan", lastName: "Ivanov", birthYear: 2000};
//
// let obj2 = {fullName:"Ivan Ivanov", age: 19};
//
// const destruct = (n) => {
//
//
//
//         return  {...n};
//
// };
//
// let {fullName, age} = obj2;
//
// const result = destruct(obj);
//
// console.log({...result, fullName, age});
//
//
//
//
//
//
// Task #1

//______________________________________________________________________________________________________________-



/**
 * OPTIONAL TASK
 * Create function which takes string as argument and capitalize every word starting with 'w' letter
 */

// function sum(string) {
//         let arr = string;
//          let arrTwo= "";
//
//         for (let i = 0; i < arr.length; i++) {
//
//
//
//                 let arrTree = arr[i];
//
//                 if (arrTree == "w") {
//                         arrTwo += "W";
//
//
//
//                 }else {
//                         arrTwo += arrTree;
//                 }
//
//
//
//         }
//
//
//         console.log(arrTwo);
//
//
// }
// sum('we wish you a marry');




function sum(string) {
        let arr = string.split('');
        let  arrTwo = [];



        for (let i = 0; i < arr.length; i++) {

                const wordOne = arr[i];

                if (wordOne.startsWith('w')) {

                        arrTwo.push('W', wordOne.slice(1))


                } else {
                        arrTwo.push(wordOne)
                }
        }
        return arrTwo.join(' ');



}
console.log(sum('we wish you a marry'));