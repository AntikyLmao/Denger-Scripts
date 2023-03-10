var myVar;

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