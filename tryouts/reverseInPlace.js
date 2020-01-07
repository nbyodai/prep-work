var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        temp = s[right];
        s[right] = s[left];
        s[left] = temp;

        left += 1;
        right -= 1;
    }
};


const input = ["n","m","o","r","e", "h", ""]
const output = ["o","l","l","e","h"]

reverseString(input)
console.log(input);
