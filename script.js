const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector(".right .top button");
const closeBtn=document.querySelector("#close-btn");
const themeToggler=document.querySelector(".theme-toggler");
const theme2=document.getElementById("theme2");
const theme3=document.getElementById("theme3");
const theme4=document.getElementById("theme4");
const theme5=document.getElementById("theme5");
const theme6=document.getElementById("theme6");
const theme7=document.getElementById("theme7");
const theme8=document.getElementById("theme8");
const theme9=document.getElementById("theme9");

menuBtn.addEventListener("click",()=>{//reveal menu
    sideMenu.style.display="block";
})
closeBtn.addEventListener("click",()=>{//close menu
    sideMenu.style.display="none";
})
themeToggler.addEventListener("click",()=>{//change theme
if(document.body.classList.contains("theme")){
    document.body.classList.remove("theme");
    theme2.style.background="white";
    theme2.style.color="black";
    theme3.style.background="white";
    theme3.style.color="black";
    theme4.style.background="white";
    theme4.style.color="black";
    theme5.style.background="white";
    theme5.style.color="black";
    theme6.style.background="white";
    theme6.style.color="black";
    theme7.style.background="white";
    theme7.style.color="black";
    theme8.style.background="white";
    theme8.style.color="black";
    theme9.style.background="white";
    theme9.style.color="black";
}
else{
    document.body.classList.add("theme");
    theme2.style.background="black";
    theme2.style.color="white";
    theme3.style.background="black";
    theme3.style.color="white";
    theme4.style.background="black";
    theme4.style.color="white";
    theme5.style.background="black";
    theme5.style.color="white";
    theme6.style.background="black";
    theme6.style.color="white";
    theme7.style.background="black";
    theme7.style.color="white";
    theme8.style.background="black";
    theme8.style.color="white";
    theme9.style.background="black";
    theme9.style.color="white";
}

})