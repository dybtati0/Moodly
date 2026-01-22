const toggle = document.getElementById("toggle-dark");
const savedDark = localStorage.getItem("dark");
if(savedDark==="on"){document.body.classList.add("dark");if(toggle)toggle.checked=true;}
if(toggle){toggle.addEventListener("change",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("dark",document.body.classList.contains("dark")?"on":"off");
});}