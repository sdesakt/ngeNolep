// tampung semua li yg ada sekarang
let liArray = document.getElementsByTagName("li");
// tambahkan tanda X dalam span dalam li
for (let i = 0; i < liArray.length; i++) {
  // tiap li, appendChild span class del, dengan text X
  const span = document.createElement("span");
  span.className = "del";
  const delSymbol = document.createTextNode("✕");
  span.appendChild(delSymbol);
  liArray[i].appendChild(span);
}

// event untuk coret list
for (let i = 0; i < liArray.length; i++) {
  liArray[i].addEventListener("click", () => {
    liArray[i].classList.toggle("checked"); // toggle untuk aktif/non kan class checked
  });
}

// event untuk delete list
let spanArray = document.getElementsByClassName("del"); // ambil semua span yg ada
for (let i = 0; i < spanArray.length; i++) {
  let span = spanArray[i];
  span.addEventListener("click", () => {
    const li = span.parentElement;
    li.remove();
  });
}

// event untuk add list
const ul = document.querySelector("ul");
const addInput = document.querySelector("#addInput");
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => {
  // buat li, listText dari input, masukkan ke li, ul
  const li = document.createElement("li");
  const listText = document.createTextNode(addInput.value);
  li.appendChild(listText);
  ul.appendChild(li);
  // kosongkan value input, fokuskan kembali ke input
  addInput.value = "";
  addInput.focus();

  // tambahkan tanda X untuk del
  const span = document.createElement("span");
  span.className = "del";
  const delSymbol = document.createTextNode("✕");
  span.appendChild(delSymbol);
  li.appendChild(span);

  // tambahkan event coret
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

  // tambahkan event del di tanda X
  span.addEventListener("click", () => {
    span.parentElement.remove();
  });
});

// event untuk search
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const resetSearchButton = document.querySelector("#resetSearchButton");

searchButton.addEventListener("click", () => {
  for (let i = 0; i < liArray.length; i++) {
    const li = liArray[i];
    if (li.firstChild.textContent !== searchInput.value) {
      li.style.display = "none";
    }
  }
});

resetSearchButton.addEventListener("click", () => {
  liArray = document.getElementsByTagName("li");
  for (let i = 0; i < liArray.length; i++) {
    const li = liArray[i];
    li.style.display = "block";
  }
});
