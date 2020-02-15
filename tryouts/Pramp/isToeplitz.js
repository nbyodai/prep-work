function isToeplitz(arr) {

for(let x=0; x<arr.length-1; x++) {
    for(let y=0; y<arr[x].length-1; y++) {
      if(arr[x][y] !== arr[x+1][y+1]) {
        return false
      }
    }
  }
  
  return true;
}

const arrCheck = [
    [1,2,3,4], 
    [5,1,2,3], 
    [6,5,1,2]
]

console.log(isToeplitz(arrCheck))