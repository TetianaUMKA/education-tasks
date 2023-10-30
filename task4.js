const userInputValue = Number(
  prompt(
    "Enter a number. And we will check it.",
    "write a number that is more than 0"
  )
);

if (userInputValue % 2 === 0) {
  alert(`${userInputValue} is a even number.`);
} else {
  alert(`${userInputValue} is a odd number.`);
}
