const cardContainer = document.querySelector(".card_container");
const cards = document.querySelectorAll(".card");

cardContainer.addEventListener("click", (e) => {
    if(e.target.className === "card"){
        cards.forEach(card => {
            card.classList.remove("active");
        });
        return e.target.classList.add("active");
    }
});