let isPalindrome = (num) => {
  let str = num.toString();
  return str === str.split("").reverse().join("");
};
console.log(`É palíndromo? ${isPalindrome(121)}`);