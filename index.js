
var popup = document.querySelector(".popup");



var trigger = document.querySelectorAll(".trigger");

trigger.forEach(trigger => {
    trigger.addEventListener("click", () => {

        popup.classList.toggle("hidden");
        trigger.classList.toggle("dark");
    });
    
});

    // trigger.addEventListener("click", () => {

    //     popup.classList.toggle("hidden");
    // });
    
