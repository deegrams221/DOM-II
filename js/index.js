// Your code goes here

// mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");
logoHeading.addEventListener("mouseout", (e) => e.target.style.transform = "scale(1)");

