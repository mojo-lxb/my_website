        /*********** TITLE CHANGE ***************/
        
let docTitle = document.title;
window.addEventListener("blur",()=>{
    document.title = "Come Back ;(";
});
window.addEventListener("focus",()=>{
    document.title = docTitle;
})

        /*********** Drop Down Menu ***************/
function drop() {
  let x = document.querySelector(".topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
        /************ DARK MODE **************/
function myFunction() {
  let theme = document.body;
  theme.classList.toggle("dark-mode");
}

      /****** AUTOMATIC SLIDER ********/

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}
/***************** See more Button *********************/

function seeMore() {
  let more = document.querySelector(".strength");
  if (more.style.display === "none") {
    more.style.display = "block";
  } else {
    more.style.display = "none";
  }
} 

/***************** Fade In Intro *********************/

window.onload = fadeIn;
  
function fadeIn() {
    let fade = document.querySelector(".intro");
    let opacity = 0;
    let intervalID = setInterval(function() {
  
        if (opacity <= 1) {
            opacity = opacity + 0.05
            fade.style.opacity = opacity;

        } else {
            clearInterval(intervalID);
        }
    },2000);
} 


/************************** Text animation *******************************/
const elements = document.querySelectorAll('.paragraph');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});



/************************** viewport animation *******************************/

// Get all the skill-per elements
let skillPerElements = document.querySelectorAll('.skill-per');

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the skill-per elements
function animateProgressBar() {
  skillPerElements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('progress-animate');
    }
  });
}

// Trigger the animation when the page loads
animateProgressBar();

// Trigger the animation when scrolling
window.addEventListener('scroll', animateProgressBar);