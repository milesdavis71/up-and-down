window.addEventListener("load", () => {
  const btnPlus = document.querySelector("#plus");
  const text = document.querySelector("#plus");
  let countPlus = 1;
  if (btnPlus) {
    btnPlus.addEventListener("click", () => {
      countPlus++;
    });
  }
});
window.addEventListener("load", () => {
  const btnMinus = document.querySelector("#minus");
  if (btnMinus) {
    btnMinus.addEventListener("click", () => {
      console.log("kuki");
    });
  }
});
