
  let mobile=document.getElementById('mobile');
  let navbar=document.getElementById('navbar');
  let bar_btn=document.getElementsByClassName('bar-btn')[0];
  let web=true;
  function change(){
    if(web){
    navbar.style.right="0px"
  }
} 
  
 mobile.addEventListener('click',change)
 function close(){
  navbar.style.right="-150px"
 }
 bar_btn.addEventListener('click',close)
