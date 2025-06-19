'use strict'
const vowels = 'aeiou';
function countVowels (str) {
let toLowerStr = str.toLowerCase();
let count = 0;
for (let i = 0; i < toLowerStr.length; i++){
if (vowels.includes(toLowerStr[i])) {
    count++;
}
};
return count;
}
console.log(countVowels('1a2a3v4b5m6o8io domashniy'));