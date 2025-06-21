// study.js

const words = JSON.parse(localStorage.getItem("words") || "[]");
let index = -1;
let showingMeaning = false;
let order = shuffle([...words]); // ランダム順

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showNext() {
  if (order.length === 0) {
    document.getElementById("display").textContent = "単語が登録されていません。";
    return;
  }

  if (showingMeaning) {
    document.getElementById("display").textContent = order[index].meaning;
    showingMeaning = false;
  } else {
    index = (index + 1) % order.length;
    document.getElementById("display").textContent = order[index].word;
    showingMeaning = true;
  }
}
