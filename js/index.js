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
window.addEventListener("scroll", () => {
    document.body.style.opacity = "0.3";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 1000);
});

// 5. mouseenter
const headNew = document.querySelector('.main-navigation');
headNew.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "lightgrey";
});

// 6. dblclick
const imgContent = document.querySelector('.img-content');
imgContent.addEventListener("dblclick", () => {
    imgContent.style.transform = "scale(1.3)";
});

// 7. mousemove
const destination = document.querySelectorAll(".destination h4");
destination[0].addEventListener("mousemove", (e) => {
  e.target.style.color = "red";
});
destination[1].addEventListener("mousemove", (e) => {
  e.target.style.color = "red";
});
destination[2].addEventListener("mousemove", (e) => {
  e.target.style.color = "red";
});
