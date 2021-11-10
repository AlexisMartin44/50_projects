const image = document.querySelector(".image");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const userImage = document.querySelector(".user-image");
const name = document.querySelector(".name");
const date = document.querySelector(".date");

const animated = document.querySelectorAll(".animated");
const animatedText = document.querySelectorAll(".animated-text");

function getData() {
  image.innerHTML =
    '<img class="firstImage" src="https://images.unsplash.com/photo-1628698446229-0f5451cb9e44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="">';

  title.innerHTML = "Lorem ipsum dolor sit amet";
  description.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  userImage.innerHTML =
    '<img class="secondImage" src="https://images.unsplash.com/photo-1628710911743-3040a7a639cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="">';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct. 08, 2020";
}

setTimeout(function () {
  getData();
  animated.forEach(animate => {
    animate.classList.remove("animated");
  });
  animatedText.forEach(animate => {
    animate.classList.remove("animated-text");
  });
}, 2000);
