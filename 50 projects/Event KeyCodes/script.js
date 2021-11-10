const blocks = document.querySelectorAll(".block");
const containers = document.querySelectorAll(".ctn");

document.addEventListener("keydown", function (e) {
  blocks.forEach(block => {
    block.classList.add("active");
  });

  containers.forEach(container => {
    container.classList.add("active");
  });

  blocks[1].innerText = e.key;
  blocks[2].innerText = e.keyCode;
  blocks[3].innerText = e.code;
});
