// 1. Create a function that will find the factorial number of [9] using recursion.
// 9! = 9*8*7*6*5*4*3*2*1
function factorial(i) {
      if (i == 1) {
            return 1

      }
      return i * factorial(--i)

}

console.log(factorial(9));

// 2. Find the maximum number in a jagged array given below array of numbers?
// const ar= [2,4,10,[12,4,[100,99],4],[3,2,99],0];
// function maximumNumber(ar){
//       let larget = 0
//       for(let i = 0; i< ar.length; i++){
//             const element = ar[i]
//             if(element > larget){
//                   larget = element
//             }
//       }
//       return larget

// }
// console.log(maximumNumber(ar));









// 3. Find the counts of duplicates in an array?
const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

function duplicateCount(arr) {
      let totalNumber = arr.sort();
     
      const findDublicateNumber = []
      for (let i = 0; i < totalNumber.length; i++) {
            if(totalNumber[i + 1] == totalNumber[i]){
                  findDublicateNumber.push(totalNumber[i]);
                }

      }
      return findDublicateNumber
}

console.log(duplicateCount(arr));




// 4. How to find unique values from an array in sorted order?
const number= [1,5,7,44,5,9,4,5,9,10,6,7,8]


function unique(number) {
      if (number.length === 0) {
            return number;
      }
      number = number.sort(function (a, b) { return a*1 - b*1; });
      var total = [number[0]];
      for (var i = 1; i < number.length; i++) {
        if (number[i-1] !== number[i]) {
          total.push(number[i]);
        }
      }
      return total;
   
    }
    console.log(unique(number));
 
