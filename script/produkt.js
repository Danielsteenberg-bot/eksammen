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
                ${product.discountInPercent == '' ? '' : `
                <h4 class="discount">SPAR <br>${product.discountInPercent}%</h4>
                `}
            </div>
        </div>
    `
}





const writeData = (menu) => {
    console.log(menu)
    const productItems = document.querySelector(".products-wrapper");
    menu.map((product) => {
        productItems.innerHTML += productTmlp(product);

    })


}



fetch("https://smuknu.webmcdm.dk/products/")
.then(response => response.json())
.then(response => {writeData(response)
console.log(response)
})



