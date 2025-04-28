//Q-1
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElement(arr, num);

//Q-2
let str = "abcdabcdefgggh";
let ans = "";
function getUnique(str) {
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar
        }
    }
    return ans;
}
console.log(getUnique(str));

//Q-3
let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];

}
console.log(longestName(country));

//Q-4
let str2 = "apnacollege";
    function countVowels(str2) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u"
    )   {
        count++;
        }
    }
        return count;

}
console.log(countVowels(str2));

//Q-5
let start = 100;
let end = 200;
    function generateRandom(start, end) {
        let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));