const menuPage = document.querySelector(".products-container")


const productTmlp = (product) => {
    return `
    <div class="product">
            <div class="product-container">
            <div class="product-img-container">
                <img src="${product.image}" alt="">
                </div>
                <div class="product-txt">
                <h5>${product.title}</h5>
                <h6>${product.price} kr</h6>

                
                </div>  
                <div class="btn-product">
                <button class="cartAdd">Tilføj Kurv</button>
                </div>
                ${product.discountInPercent == '' ? '' : `
                    <h4 class="discount">SPAR <br>${product.discountInPercent}%</h4>
                  </div>
                `}
            </div>
        </div>
    `
}

/* Udprint DATA */
const writeData = (menu) => {
    const productItems = document.querySelector(".products-wrapper");
    menu.map((product) => {
        productItems.innerHTML += productTmlp(product);
    })
   
}




fetch("https://smuknu.webmcdm.dk/products/")
.then(response => response.json())
.then(response => {writeData(response)



})




/* Animation til Landing produkt page */
 const productTXT = document.querySelector(".spacer-txt")
const prodcutCON = document.querySelector(".products-wrapper")

window.addEventListener("scroll", function(){
  element = productTXT.getBoundingClientRect().y - this.window.innerHeight;

  if(element < - 200){
    productTXT.classList.add("fadeDown")
  }

  if(element < - 220){
    prodcutCON.classList.add("fadeUp")

  }
}) 

/* Animation til Biv medlem sektionen */
 let memberCON = document.querySelector(".member-container")
let memberTXT = document.querySelector(".member-txt-wrapper")
let memberGRID = document.querySelector(".member-img-grid")

window.addEventListener("scroll", function(){
  element = memberCON.getBoundingClientRect().y - this.window.innerHeight;

  if(element <  - 400){
    memberTXT.classList.add("fadeRight");
    memberGRID.classList.add("fadeLeft");
  }
}) 
