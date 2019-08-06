// Your code goes here

// mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.5)";
});

// mouseout
logoHeading.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1)";
});

// click
const paragraph = document.querySelectorAll('p');
paragraph.forEach((elementP) => {
    elementP.addEventListener("click", (e) => {
        e.target.style.color = "green";
    });
});