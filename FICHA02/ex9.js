let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(`Número aleatório: ${randomNumber(10, 20)}`);