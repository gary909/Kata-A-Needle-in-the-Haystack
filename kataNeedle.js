// Rough version:
//
// function findNeedle(haystack) {
//     // your code here
//     // return haystack // returns array
//     // return haystack.length; // returns 10
//     var ans = 0;
//     for (var i = 0; i < haystack.length; i++){
//         ans = ans + 1;
//         if (haystack[i] == 'needle') {
//             ans = ans -1;
//             return 'found the needle at position ' + ans;
//         }
//     }
//     console.log(ans);
//   }

// Refactored version:

function findNeedle(haystack) {
    var ans = 0;
    for (var i = 0; i < haystack.length; i++){
        ans = ans + 1;
        if (haystack[i] == 'needle') {
            ans = ans -1;
            return 'found the needle at position ' + ans;
        }
    }
}




  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])); // returns 'found the needle at position 3'