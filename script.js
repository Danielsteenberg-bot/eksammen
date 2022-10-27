
  const menuPage = document.querySelector(".front-product-containe")


const productTmlp = (product) => {
    return `
    <div class="product">
            <div class="product-container">
                <img src="${product.image}" alt="">
                <div class="product-txt">
                    <h5>${product.title}</h5>
                    <h6>${product.price},00 kr</h6>
                </div>
            </div>
        </div>
    `
}

const writeData = (menu) => {
    console.log(menu)
    const productItems = document.querySelector(".front-product-wrapper");
    menu.map((product) => {

        if(product.recommended === true){
            productItems.innerHTML += productTmlp(product)
        }
    })
}

fetch("https://smuknu.webmcdm.dk/products/")
.then(response => response.json())
.then(response => {writeData(response)
console.log(response)
})



