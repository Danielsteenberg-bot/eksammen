


const onSubmit= (e) => {

    e.preventDefault();

    const resultElement = document.querySelector('.result');
    const form = document.querySelector(".contact-wrapper");
    const userRes = document.querySelector(".response")

    let postObj = {
        "name" : e.target.elements.name.value,
        "email": e.target.elements.email.value,
        "message": e.target.elements.message.value
    }

    console.log(postObj)

    const url = 'https://smuknu.webmcdm.dk/subscribe';

    fetch(url, {
        method: 'POST',
        body : JSON.stringify(postObj),
        headers: {
            'Content-Type': 'application/json'   
        }
    })
    .then((response) => {
        
        return response.json()
    }
    ).then(response => {
        resultElement.textContent = response.result.name;
        form.style.display = "none";
        userRes.classList.add("test");

})



}

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', onSubmit)

