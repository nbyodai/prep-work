// Find the median of two sorted arrays.

// eg.

// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]

// median(arr1, arr2) = 3.5

// brute force method would be to merge the sorted arrays and then pick the 
// number at the middle index if odd length or pick the division of middle index
// in even numbered array


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const arr3 = [1];
const arr4 = [2];

function findMidIndex(array) {
  if(array.length % 2 === 0) {
    // even return middle two
    let midDecimal = Math.floor((array.length - 1) / 2)
    return [midDecimal, midDecimal+1];
  } else {
    return [Math.round((array.length-1)/2)]
  }
}

function calculateArrayMin(array, index) {
  if(index.length === 1) {
    return array[index[0]]
  } else {
    return (array[index[0]] + array[index[1]]) / 2
  }
}

function median(a1, a2) {
  let index1 = findMidIndex(a1);
  let index2 = findMidIndex(a2);

  let median1 = calculateArrayMin(a1, index1)
  let median2 = calculateArrayMin(a2, index2)

  return (median1 + median2 ) / 2
}

