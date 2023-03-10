var myVar;
var navbartoggle = false

function YoutubeChannelOpenLink(){
  window.open("https://www.youtube.com/@Denger", "_blank");
}


function YoutubeVideoOpenLink(){
  window.open("https://www.youtube.com/watch?v=bV-kLVUy48w", "_blank");
}

function OpenInfiniteYield(){
  window.location.replace("../Scripts-Pages/InfiniteYield.html");
}

function OpenInfiniteYieldOfferWall(){
  window.open("https://www.youtube.com/watch?v=bV-kLVUy48w", "_blank");
}

function LoaderStart() {
  console.log("ez");
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


function openNavbar(){
  if (navbartoggle != true){
    var navbartoggle = true;
    document.getElementById("Navbar-Button").style.animation = "open 1s";
    document.getElementById("navbar-buttons").style.animation = "openbuttons 1s";
  }
  else{
    document.getElementById("Navbar-Button").style.animation = "close 1s";
    document.getElementById("navbar-buttons").style.animation = "closebuttons 1s";
  }
}