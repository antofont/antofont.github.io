var n_img = 3;
var corrente = 1;

function succ(){
  corrente++;
  if(corrente>n_img){
    corrente = 1;
  }
  for(var i = n_img; i > 0; i--){
   document.querySelector("#img_slider img:nth-child("+ i + ")").style.display = "none"; 
  }
  document.querySelector("#img_slider img:nth-child("+ corrente + ")").style.display = "block";
}

function prec(){
  corrente--;
  if(corrente == 0){
    corrente = n_img;
  }
  for(var i = n_img; i > 0; i--){
   document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none"; 
  }
  document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

function changeColor(letteraSelezionata){
  elements = document.querySelectorAll('.lettera');
  elementNumber = elements.length;
  for(i=0; i < elementNumber; i++) {
    elements[i].style.color = "#f20574";
    elements[i].style.backgroundColor = "#f3f3f3";
  }
  document.querySelector('#'+letteraSelezionata).style.color= 'white';
  document.querySelector('#'+letteraSelezionata).style.backgroundColor= "#f20574";
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


function openNav() {
  document.getElementById("main").style.display= "block";
  document.getElementById("mySidebar").style.width = "fit-content";
  document.getElementById("main-2").style.display= "none";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.display="none";
  document.getElementById("main-2").style.display= "block";
}