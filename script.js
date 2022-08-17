const hambarger = document.querySelector(".hambarger");
const navitems = document.querySelector(".navitems");

hambarger.addEventListener("click",() =>{
    hambarger.classList.toggle("active");
    navitems.classList.toggle("active");
})

console.log("hallow world");