const numbers = [44, 6, 2, 13, 8, 0, 12, 1, 3];

function selectionSort(array) {
    let lenght = array.length;
    for(let i=0; i < lenght; i++) {
        let min = i;
        let temp = array[min]
        for(let j=i+1; j < lenght; j++) {
            if(array[j] < array[min]) {
                min = j
            }
        }

        array[i] = array[min]
        array[min] = temp
    }
}

selectionSort(numbers);
console.log(numbers);
