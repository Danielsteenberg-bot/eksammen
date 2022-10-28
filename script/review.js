/* Template på hvordan data skal udskrives */
const reviewTmlp = (review) => {
    return `
    <div class="review-H" id="${review.name}">
                    <img src="${review.image}" alt="">
                    <div class="review-txt-container">
                        <p>${review.description}</p>
                    </div>
                        <div class="review-sender">
                            <h5>${review.name}</h5>
                            <h5>${review.byline}</h5>
                        </div>
                        <hr class="review-line">
                    </div>
        </div>
    `
}

/* Udskriv DATA */
const reviewData = (menu) => {
    const reviewContainer = document.querySelector(".reviews");
    menu.map((review) => {
        reviewContainer.innerHTML += reviewTmlp(review);

    })
   
}


fetch("https://smuknu.webmcdm.dk/reviews")
.then(response => response.json())
.then(response => {reviewData(response)
})



