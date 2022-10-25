const menuPage = document.querySelector(".products-container")


const productTmlp = (product) => {
    return `
    <div class="product">
            <div class="product-container">
                <img src="${product.image}" alt="">
                <div class="product-txt">
                    <h5>${product.title}</h5>
                    <h6>${product.price} kr</h6>

                </div>
            </div>
        </div>
    `
}

const discountTmlp =  (product) =>{

    if(product.discountInPercent === ""){  
            return `

            `
 }
    else{
        return    `

            <h4 class="discount">SPAR <br>${product.discountInPercent}%</h4>
        `
    }


}




const writeData = (menu) => {
    console.log(menu)
    const productItems = document.querySelector(".products-wrapper");
    const discount = document.getElementsByTagName("h4");
    menu.map((product) => {
        productItems.innerHTML += productTmlp(product);
        productItems.innerHTML += discountTmlp(product);


        if(product.discountInPercent === ""){
            console.log(product.discountInPercent.valueOf());
            
            productItems.classList.add("test");
/*             discount.style.display  = "none";
 */        }

    })


}



fetch("https://smuknu.webmcdm.dk/products/")
.then(response => response.json())
.then(response => {writeData(response)
console.log(response)
})



