const questionPage = document.querySelector(".question-wrapper")


const productTmlp = (question) => {
    return `
    <button class="accordion"><i class="fa-solid fa-question"></i>${question.question}</button>
        <div class="panel">
    <p>${question.answer}</p>
    </div>
    <hr>
  `
}


const writeData = (menu) => {
    console.log(menu)
    const questions = document.querySelector(".question-wrapper");
    menu.map((question) => {
        questions.innerHTML += productTmlp(question);

    })
}



fetch("https://smuknu.webmcdm.dk/questions")
.then(response => response.json())
.then(response => {writeData(response)

var acc = document.querySelectorAll(".accordion");
var i;

console.log(document.querySelectorAll(".accordion"))

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
})



