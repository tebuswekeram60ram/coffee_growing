var header = document.querySelector(".header");
var currentHour = new Date().getHours();

if (header){
    if (currentHour < 12) {
        hero.textContent = "Good Morning!";
    }
    else if (currentHour < 18) {
        header.textContent = "Good Afternoon!";
    }
    else {
        header.textContent = "Good Evening!";
    }
}