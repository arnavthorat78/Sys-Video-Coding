const ready=e=>{"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)},toggle=(e,t)=>{const n=document.querySelector(e);n.classList.contains(t)?n.classList.remove(t):n.classList.add(t)};ready(()=>{document.querySelector(".menu-toggle").addEventListener("click",()=>{toggle("nav","active")})});