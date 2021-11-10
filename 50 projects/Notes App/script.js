const button = document.querySelector(".button");
const notes = JSON.parse(localStorage.getItem("notes"));
const notesContainer = document.querySelector(".notes-container");

if (notes) {
  notes.forEach(note => addNewNote(note));
}

button.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="navbar">
      <img class="pen icon" src="https://img.icons8.com/ios-glyphs/90/ffffff/pen.png" />
      <img class="bin icon" src="https://img.icons8.com/material-outlined/384/ffffff/trash--v1.png" />
    </div>
    <div class="main ${text === "" ? "" : "hidden"}"></div>
    <textarea class="textarea ${
      text === "" ? "" : "hidden"
    }" name="" id="" cols="30" rows="10"></textarea>
  `;

  const pen = note.querySelector(".pen");
  const bin = note.querySelector(".bin");
  const textArea = note.querySelector(".textarea");
  const main = note.querySelector(".main");

  textArea.value = text;
  main.innerHTML = marked(text);

  pen.addEventListener("click", function () {
    textArea.classList.toggle("hidden");
    main.classList.toggle("hidden");
  });

  textArea.addEventListener("input", e => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });

  bin.addEventListener("click", function () {
    note.remove();
    updateLS();
  });

  notesContainer.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll(".textarea");
  const notes = [];

  notesText.forEach(note => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
