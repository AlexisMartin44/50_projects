const lettersPassword = document.querySelectorAll(".letter-p");
const lettersMail = document.querySelectorAll(".letter-e");
let transitionDelay = 0;

lettersPassword.forEach(letter => {
  letter.style.transitionDelay = `${transitionDelay}s`;
  transitionDelay += 0.05;
});
transitionDelay = 0;
lettersMail.forEach(letter => {
  letter.style.transitionDelay = `${transitionDelay}s`;
  transitionDelay += 0.05;
});
