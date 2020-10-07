function readMore() {
   var dots = document.getElementById("dots");
   var more = document.getElementById("more");
   var btnmore = document.getElementById("btnmore");

   if(dots.style.display === "none") {
     dots.style.display="inline";
     btnmore.innerHTML="ПОДРОБНЕЕ";
     more.style.display="none"; 
   } else {
        dots.style.display="none";
        btnmore.innerHTML="СКРЫТЬ";
        more.style.display="inline";
   }
}