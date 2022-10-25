const formular = document.querySelector('.form-index');
const formContainer = document.querySelector('.form-index');
const contactWrapper = document.querySelector('.index-form-container');
const contactTXT = document.querySelector('.index-form-container');
const responseDONE = document.querySelector('.response');
const checkMARK = document.querySelector('.check-icon');
const statusTXT = document.querySelector(".over-checkmark-TXT")
const statusERR = document.querySelector(".error-message");



/* 
const sendToMail = (e) => {

    e.preventDefault()

    let formInputs = formular.elements;

        let formData = {
            'email' : formInputs['email'].value,
            'name' : formInputs['name'].value,
            'message' : formInputs['text'].value
         }

        fetch('https://smuknu.webmcdm.dk/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) =>{
             if(response.ok){
                formContainer.classList.add('submitDONE');
                contactTXT.classList.add('hidden');
                contactWrapper.style.display = "none";
                responseDONE.classList.add('responsePLAY');
                statusTXT.innerHTML = response.result;
             }
             else {
                statusERR.innerHTML = response.result;                

             }
           return response.json()  
        })

    
}

formular.addEventListener("submit", sendToMail) */

const onSubmit= (e) => {

    e.preventDefault();

    const resultElement = document.querySelector('.result');

    let postObj = {
        "name" : e.target.elements.name.value,
        "email": e.target.elements.email.value,
        "message": e.target.elements.text.value
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
        console.log('--->', response, response.ok)
        
        return response.json()
    }
    ).then(response => {
        console.log('--->sdsdsd')
        resultElement.textContent = response.result
    })



}

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', onSubmit)