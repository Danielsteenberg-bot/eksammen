/* Animation til Landing produkt page */
const landTXT = document.querySelector(".front-product-header-txt")
const landPRD = document.querySelector(".front-product-wrapper")

window.addEventListener("scroll", function(){
  elementL = landTXT.getBoundingClientRect().y - this.window.innerHeight;

  if(elementL < - 200){
    landTXT.classList.add("fadeDown")
  }

  if(elementL < - 220){
    landPRD.classList.add("fadeUp")

  }
})

/* Animation til Biv medlem sektionen */
let memberCON = document.querySelector(".member-container")
let memberTXT = document.querySelector(".member-txt-wrapper")
let memberGRID = document.querySelector(".member-img-grid")

window.addEventListener("scroll", function(){
  elementM = memberCON.getBoundingClientRect().y - this.window.innerHeight;

  if(elementM <  - 400){
    memberTXT.classList.add("fadeRight");
    memberGRID.classList.add("fadeLeft");
  }
})



/* Animation til Review sektionen */
let reviewTXT = document.querySelector(".front-review-header-txt")
let reviews = document.querySelector(".reviews")

window.addEventListener("scroll", function(){
  element = reviewTXT.getBoundingClientRect().y - this.window.innerHeight;

  if(element < - 500){
    reviewTXT.classList.add("fadeDown");
    reviews.classList.add("fadeUp");
  }
})