// insertion sort
function swap(list, low, high) {
  let temp = list[low];
  list[low] = list[high];
  list[high] = temp;

  return list;
}
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
  }
}

// const numbers = [6, 5, 3, 1, 8, 7, 2, 4]
const numbers = [1, 6, 5, 7, 3, 9, 3, 43, 0];

insertionSort(numbers);
console.log(numbers);
