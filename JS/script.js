let body = document.querySelector("body");
console.log(body)
    let toggle = document.querySelector("#toggle");
    let sunIcon = document.querySelector(".toggle .bxs-sun");
    let moonIcon = document.querySelector(".toggle .bx-moon");
    

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    document.querySelector("section").classList.toggle('dark-mode');
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
})
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".menu");
let icon = document.querySelector(".hamburger i")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    icon.classList.toggle("fa-xmark");
})
document.querySelector("li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    icon.classList.remove("fa-xmark")
    

    
    

})
    
    
);

