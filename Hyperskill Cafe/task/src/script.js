const reviewTitle = document.getElementById("reviewTitle");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const submit = document.getElementById("reviewButton");
const reviews = document.getElementById("reviewsRow");

submit.addEventListener("click", (event) => {
    let form = document.getElementById("reviewForm");
    if (form.checkValidity()) {
        let newNode = reviews.lastElementChild.cloneNode(true);
        let h4 = newNode.querySelector(".card-title");
        h4.innerText = reviewTitle.value;
        let p = newNode.querySelector("p");
        p.innerText= reviewText.value;
        let footer = newNode.querySelector("footer");
        if (reviewName.value === "") {
            footer.innerHTML = "<i>Anonymous</i>";
        } else {
            footer.innerHTML = `<i>${reviewName.value}</i>`;
        }
        reviews.append(newNode);
        event.preventDefault();
    }
});