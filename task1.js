const value = prompt("What is the official name of JavaScript?", "write name");
console.log(value);

if (value !== "EcmaScript") {
  alert("This is the wrong answer!🙅‍♀");
  const value = prompt(
    "Try again.You can do it. What is the official name of JavaScript?"
  );
  if (value !== "EcmaScript") {
    console.log("wrong");
    alert("This is the wrong answer!🙅‍♀ The right answer is EcmaScript.");
  } else {
    alert("Well done, this is the correct answer!🔥");
  }
} else {
  alert("Well done, this is the correct answer!🔥");
}
