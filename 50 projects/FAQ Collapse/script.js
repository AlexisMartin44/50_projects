

const questionsContainer = document.querySelectorAll('.question-container');

questionsContainer.forEach(question => {
    question.addEventListener('click', function (e) {
        question.classList.toggle('active');
        if (question.classList.contains('active')) {
            question.lastChild.previousSibling.innerHTML = '&times;';
        }
        else {
            question.lastChild.previousSibling.innerHTML = '&rsaquo;';
        }
    });
})
