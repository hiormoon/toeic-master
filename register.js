// register.js

let wordList = JSON.parse(localStorage.getItem("words") || "[]");

function addWord() {
  const word = document.getElementById("word").value.trim();
  const meaning = document.getElementById("meaning").value.trim();

  if (word && meaning) {
    wordList.push({ word, meaning });
    localStorage.setItem("words", JSON.stringify(wordList));
    document.getElementById("word").value = "";
    document.getElementById("meaning").value = "";
    renderList();
  }
}

function deleteWord(index) {
  if (confirm("この単語を削除しますか？")) {
    wordList.splice(index, 1);
    localStorage.setItem("words", JSON.stringify(wordList));
    renderList();
  }
}

function renderList() {
  const list = document.getElementById("wordList");
  list.innerHTML = "";
  wordList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.word} : ${item.meaning} `;

    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => deleteWord(index);

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

renderList();
