// Your code goes here

// 1. mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.5)";
});

// 2. mouseout
logoHeading.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1)";
});

// 3. click
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((elementP) => {
    elementP.addEventListener("click", (e) => {
        e.target.style.color = "green";
    });
});

// 4. scroll
window.addEventListener("scroll", (e) => {
    document.body.style.opacity = "0.3";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 700);
});