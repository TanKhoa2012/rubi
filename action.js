var slideIndex =0;
var slideIndex1 =0;
var dotL = document.getElementById("TL");
var dotR  =document.getElementById("TR");
var i;var slides = document.getElementsByClassName("item");

dotR.onclick = function()
{

  setTimeout(showSlidesR,3);
  setTimeout(showR,200);
  setTimeout(showR1,200);
}
setInterval(() => {
    setTimeout(showSlidesR,3);
    setTimeout(showR,200);
    setTimeout(showR1,200); 
},5000);
function showSlidesR()
{
    slides[slideIndex1].style.animationName = "fadR";
}
function showR()
{
 
    slides[slideIndex1].style.display = "none";
    slideIndex1 --;
    if(slideIndex1 < 0 ) slideIndex1 = slides.length-1;
}
function showR1()
{
    slideIndex--;
    if(slideIndex < 0) slideIndex = slides.length-1;
 
    slides[slideIndex].style.animationName = "fadeR";
    slides[slideIndex].style.display = "flex";
    
}

dotL.onclick = function()
{
    setTimeout(showSlidesL,3);
    setTimeout(showL,200);
    setTimeout(showL1,200);
   
}


function showSlidesL()
{
    slides[slideIndex1].style.animationName = "fad";
}
function showL1()
{
 
    slideIndex++;
    if(slideIndex > slides.length -1) slideIndex =0;
    slides[slideIndex].style.animationName = "fade";
    slides[slideIndex].style.display = "flex";
    
}
function showL()
{
 
    slides[slideIndex1].style.display = "none";
    slideIndex1 ++;
    if(slideIndex1 > slides.length -1) slideIndex1 =0;
   
}