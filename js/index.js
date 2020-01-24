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
window.addEventListener('scroll', (e) => {
    e.target.body.style.opacity = "0.3";
    setTimeout(() => {
        e.target.body.style.opacity = "1";
    }, 1000);

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scroll1 = window.scrollY;
    if (Math.ceil(scroll1) === scrollable){
        alert("You\'re at the bottom!");
    };

    e.target.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1423450822265-fcd97e52ecb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=520&q=80')";
    e.target.body.style.backgroundRepeat = "no-repeat";
    e.target.body.style.backgroundPosition = "center";
    e.target.body.style.backgroundSize = "cover";
    e.target.body.style.color = "white";
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
    // nested event - click and prevent nav default
    navA.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

// 9. nav mouseout
navA.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1)";
});

// 10. destination dblclick
const contentDest = document.querySelector('.content-destination');
contentDest.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(1.5)";
    // nested event - mouseout
    contentDest.addEventListener("mouseout", (e) => {
        e.target.style.color = "purple";
    });
});