// Start Imgae Slider
let list = document.querySelectorAll(".list li");
let allDiv = document.querySelectorAll(".row > div");
let arrDiv = Array.from(allDiv);


list.forEach((li) => {
    li.addEventListener("click", remove);
    li.addEventListener("click", appear);
})


function remove() {
    list.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}

function appear() {
    arrDiv.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.target).forEach((img) => {
        img.style.display = "";
    })
}
//End Imgae Slider
// Start Up And Down
let span = document.querySelector(".show-up");
let creativiy = document.querySelector(".creativiy");
window.onscroll = function() {
    this.scrollY >= 900 ? span.classList.add("show") : span.classList.remove("show");
}

span.onclick = function() {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}
// End Up And Down