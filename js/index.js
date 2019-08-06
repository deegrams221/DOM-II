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
    e.target.body.style.opacity = "0.3";
    setTimeout(() => {
        e.target.body.style.opacity = "1";
    }, 1000);
});

// 5. mouseenter
const headNew = document.querySelector('.main-navigation');
headNew.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "lightgrey";
});

// 6. dblclick
const imgContent = document.querySelector('.img-content');
imgContent.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(1.3)";
});

// 7. mousemove
const destination = document.querySelectorAll(".destination h4");
destination.forEach((elementH) => {
    elementH.addEventListener("mousemove", (e) => {
        e.target.style.color = "red";
    });
});

// 8. nav mouseover
const navA = document.querySelector('.nav');
navA.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.3)";
});

// 9. nav mouseout
navA.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1)";
});

// 10. destination dblclick
const contentDest = document.querySelector('.content-destination');
contentDest.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(1.5)";
});