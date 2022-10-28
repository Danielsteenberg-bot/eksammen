

const memberTmlp = (member) => {
    return `
    <img class="grid-img" src="${member.image}" alt="${member.byline}">

    `
}




const memberData = (menu) => {
    const memberContainer = document.querySelector(".member-img-grid");
    menu.map((member) => {
        memberContainer.innerHTML += memberTmlp(member);

    })


}



fetch("https://smuknu.webmcdm.dk/reviews")
.then(response => response.json())
.then(response => {memberData(response)
})



