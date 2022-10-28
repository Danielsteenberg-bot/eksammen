
fetch("https://smuknu.webmcdm.dk/products/")
.then(response => response.json())
.then(response => {



  /*     shop funktionalitet */
var addBTN = document.querySelectorAll(".cartAdd");

for (let i=0;  i < addBTN.length; i++){
  addBTN[i].addEventListener('click', ()=>{
    cartItems(response[i]);
    totalCost(response[i]);
  })
}



    function cartItems(response){
      let productNumber = localStorage.getItem('cartItems');
      let kurv = document.querySelector(".cart")

      productNumber = parseInt(productNumber);

      if(productNumber){
        localStorage.setItem("cartItems", productNumber +1);
        kurv.classList.add("active")
      }
      else{
        localStorage.setItem("cartItems", 1);
        kurv.classList.add("active")
      }

      setItems(response);
    }

    function setItems(response){
      let cartValue = localStorage.getItem("productsInCart");
      cartValue = JSON.parse(cartValue)

      if(cartValue != null){

        if(cartValue[response.title] == undefined){
          cartValue = {
            ...cartValue,
            [response.title]: response,

          }
        }

        cartValue[response.title].antal += 1;
      }  else{
        cartValue={
          produkt:  response.id,
          produktName:  response.title,
          produktIMG:  response.image,
          produktPrice:  response.price,
          antal : 1
  
        }
      }
      localStorage.setItem("productsInCart",JSON.stringify(cartValue));
    }  



/* beregn i alt pris  */

function totalCost (response){
  let cartCost = localStorage.getItem("totalCost");

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + response.price);
  }

  else{
    localStorage.setItem("totalCost", response.price);
  }

}




function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartContainer = document.querySelector(".cart-items");
    let cartTotal = document.querySelector(".item-total");
    let empty = document.querySelector(".empty");
    let cartCost = localStorage.getItem("totalCost");



    if(cartItems && cartContainer){
        Object.values(cartItems).map(item =>{
            if(item.title == undefined){
                empty.style.display ="block";
            
            }
            else{
            empty.style.display ="none";
            cartContainer.innerHTML += 
            `
                <div class="cart-item">
                    <img src="${item.image}" alt="lækkert produkt">
                        <h6>${item.title}</h6>
                        <div class="item-price">${item.price},00 kr</div>
                </div>
                <hr>
            `
        }
    })
    cartTotal.innerHTML +=
    `
    <h6>ialt</h6>
    <p>${cartCost} kr</p>
    `

  
    }


}



displayCart()
})
