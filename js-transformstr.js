/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/

const testStr = "test.com/post/12xy5id-hello-and-welcome"


const transform = (testStr) => {
  let transfromStr = ''
  const stepOne = testStr.split('post/')
  const endURL = stepOne[1]

  const stepTwo = endURL.split('-')

  const listSet = stepTwo.filter((str) => {
    if(!str[0] === '-' || str[0]) {
      return str
    }
  })

  const transformSet = listSet.map((str) => {
    if(str.length <=3){
      return str
    }
    return str[0].toUpperCase() + str.slice(1)
  })

  transformSet.shift();
  transfromStr = transformSet.join(' ')
  console.log(transfromStr)
  return transfromStr
}

transform(testStr)
