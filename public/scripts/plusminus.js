$(document).ready(() => {
    const minusButton = document.getElementById("button--decrement");
    const plusButton = document.getElementById("button--increment");
    const numberField = document.getElementById("paragraphs");
    
    minusButton.addEventListener("click", () => {
      if (numberField.value > 1) {
        numberField.value --;
      }
    });

    plusButton.addEventListener("click", () => {
      if (numberField.value < 99) {
        numberField.value ++;
      }
    });
  });
  