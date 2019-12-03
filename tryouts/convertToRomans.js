/**
 * Coding Interview Question: Given an integer,
 * write a function to return its roman numeral representation.
 */

// I    1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// IV	4 = 5 - 1
// IX	9 = 10 - 1
// XL	40 = 50 - 10
// XC	90 = 100 - 10
// CD	400 = 500 - 100
// CM	900 = 1000 - 100

// 47
// 4 Tens + 7
// 5 - 1 Tens || 5 + 2 Units
// XLVII

const romans = {
    1: ['I', 'X', 'C', 'M'],
    4: ['IV', 'XL', 'CD'],
    5: ['V', 'L', 'D'],
    9: ['IX', 'XC', 'CM'],
}

function convertToRomans(n) {
    let nums = [];
    while(n > 0) {
        let val = n % 10;
        nums.push(val);
        n = (n - val) / 10
    }
    let romanStr = new Array(nums.length)

    nums.forEach((val, index) => {
        if(romans[val]) {
            romanStr[index] = romans[val][index]
        } else {
            const diff = val - 5
            if (diff > 0) {
                romanStr[index] = romans[5][index-1] + romans[1][index-1].repeat(diff)
            } else {
                romanStr[index] = romans[1][index-1].repeat(Math.abs(diff))
            }
        }
    })
    return romanStr.reverse().join('');
}

console.log(convertToRomans(419))

const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

function convertToRomansByte(number) {
    if(number > 3999 || number < 1) throw new Error('Not a valid argument')

    let finalRomanStr = '';
    let i = 0;

    while(number > 0) {
        if(number - values[i] >= 0) {
            finalRomanStr += numerals[i];
            number -= values[i];
        } else {
            i++;
        }
    }
    return finalRomanStr;
}

const finalAnwser = convertToRomansByte(419)
console.log(finalAnwser)
