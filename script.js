const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

clearButton.addEventListener("click", () => {
  display.value = "";
});

deleteButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      try {
        display.value = eval(display.value);
      } catch (err) {
        display.value = "Syntax Error";
      }
    }
    else{
      display.value += e.target.value;
    }
  });
});
