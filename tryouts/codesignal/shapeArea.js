// recursive
function shapeArea(n) {
  if(n <= 1) {
      return 1
  }

  return shapeArea(n-1) + 4 * (n-1) 
}


function shapeArea2(n) {
  return n*n + (n-1)*(n-1)
}