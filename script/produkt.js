const menuPage = document.querySelector(".products-container")


const productTmlp = (product) => {
    return `
    <div class="product">
            <div class="product-container">
                <img src="${product.image}" alt="">
                <hr class="product-line">
                <div class="product-txt">
                    <h5>${product.title}</h5>
                    <h6>${product.price} kr</h6>
                </div>
            </div>
        </div>
    `
}


const writeData = (menu) => {
    console.log(menu)
    const productItems = document.querySelector(".products-wrapper");
    menu.map((product) => {
        productItems.innerHTML += productTmlp(product)
        if(product.recommended === true){
            console.log("disse produkter skal på forsiden")
        }
    })



}

fetch("https://smuknu.webmcdm.dk/products/")
.then(response => response.json())
.then(response => {writeData(response)
console.log(response)
})



