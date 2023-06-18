const hamburger=document.querySelector(".hamburger-icon")
const sidebarE1=document.querySelector(".sidebar")
const cross=document.querySelector(".croos-icon")

function sidebarvisible(){

   sidebarE1.style.setProperty('transform', 'translateX(0)');
   hamburger.style.setProperty('display','none');
}

function sidebarhide(){
    sidebarE1.style.setProperty('transform', 'translateX(100%)');
  
        hamburger.style.setProperty('display','inherit');

   
}