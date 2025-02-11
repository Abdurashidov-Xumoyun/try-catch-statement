let ellInputValue = document.querySelector(".inputText"),
  ellBtn = document.querySelector(".btn"),
  ellError = document.querySelector("span");

function numFilter() {
  let value = Number(ellInputValue.value)
  ellError.style.color = "red";
  try {
    if (value === 0) {
      throw `biron son kritishingiz mumkin va u "0" da farqli bo'lsin`
    }
    if (value < 5) {
      throw "5 dan kichik son kritdingiz";
    } 
    if (value > 10) {
      throw "10 dan katta son kritdingiz";
    }
    if (!Number(value)) {
      throw "son kritmadingiz";
    }
    if (value > 5 || value < 10) {
      ellError.style.color = "green";
      throw "to'g'ri son kritdingiz";
    }
  } catch (error) {
    ellError.innerHTML = `Siz ${error}`
  }
}