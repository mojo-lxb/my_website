        /*********** TITLE CHANGE ***************/
        
let docTitle = document.title;
window.addEventListener("blur",()=>{
    document.title = "Come Back ;(";
});
window.addEventListener("focus",()=>{
    document.title = docTitle;
})
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
  let more = document.querySelector(".skills");
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


