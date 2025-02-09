/*
Our loose definition of vampire numbers can be described as follows:

6 * 21 = 126
6 and 21 would be valid 'fangs' for a vampire number as the 
digits 6, 1, and 2 are present in both the product and multiplicands.

10 * 11 = 110
110 is not a vampire number since there are three 1's in the
multiplicands, but only two 1's in the product.

Create a function that can receive two 'fangs' and
determine if the product of the two is a valid vampire number.
*/


// Solution

function vampire_test(a, b) {
  return sortStr(a + '' + b) == sortStr(a * b + '');
}

function sortStr(v) {
  return v.split('').sort().join('')
}

// or

let vampire_test = function(a, b) {
  let origDigits = String(a) + String(b),
      prodDigits = String(a * b);

  origDigits = origDigits.split('').sort().join('');
  prodDigits = prodDigits.split('').sort().join('');

  return prodDigits === origDigits ? true : false;
}