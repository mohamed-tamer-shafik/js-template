//removeActive Function
function removeActive(elements,element){
    elements.forEach((ele)=>{
        ele.classList.remove("active")
    })
    element.classList.add("active")
}
/*Checking Existing Color Starts*/
if(localStorage.getItem("mainColor")){
document.documentElement.style.setProperty('--mainColor',localStorage.getItem("mainColor"));
document.querySelectorAll(".settings .setting-box1 ul li").forEach( li =>{
    li.classList.remove("active");
    if(li.dataset.color===localStorage.getItem("mainColor"))
    {
        li.classList.add("active");

    }
    })

}
/*Checking Existing Color Ends*/


/*Switching Backgrounds Starts*/
let myBackgrounds=["imgs/img1.jpeg","imgs/img2.jpeg","imgs/img3.jpeg","imgs/img4.jpeg","imgs/img5.jpeg","imgs/img6.jpeg"];

function randomBackgroundChanging(){
backInterval= setInterval(()=>{
    let randomNumber=Math.floor(Math.random()*myBackgrounds.length);
    document.querySelector(".landing-page").style.backgroundImage=`url("${myBackgrounds[randomNumber]}")`;

},10000)};
randomBackgroundChanging();
document.querySelectorAll(".setting-box2 span").forEach(span=>{
span.onclick=function(e){
  removeActive(document.querySelectorAll(".setting-box2 span"),e.target)
localStorage.setItem("backGroundDecesion",e.target.dataset.switch);
if(e.target.dataset.switch==="yes"){
    randomBackgroundChanging();
}
else{
    clearInterval(backInterval);
}
}

})
/*Checking Existing Background Settings*/
if(localStorage.getItem("backGroundDecesion")){

    if(localStorage.getItem("backGroundDecesion")==="no"){
clearInterval(backInterval);
document.querySelector(".setting-box2 span:first-of-type").classList.remove("active")
document.querySelector(".setting-box2 span:last-of-type").classList.add("active")
    }
}
/*Checking Existing Background Settings*/
/*Switching Backgrounds Ends*/
/*Opening And Closing Settings Box Starts*/
document.querySelector(".fa-gear").onclick=function(){
    document.querySelector(".settings").classList.toggle("open");
}
/*Opening And Closing Settings Box Ends*/

/*Changing Colors Starts*/
document.querySelectorAll(".settings .setting-box1 ul li").forEach( li =>{
li.onclick=function(e){
document.documentElement.style.setProperty("--mainColor",e.target.dataset.color);
localStorage.setItem("mainColor",e.target.dataset.color);
removeActive(document.querySelectorAll(".settings .setting-box1 ul li"),e.target);
}

})
/*Changing Colors Ends*/
/*Our Skills Animation*/
OurSkills=document.querySelector(".our-skills");
window.onscroll=function(){

    if(window.pageYOffset > OurSkills.offsetTop + OurSkills.offsetHeight - window.innerHeight ){
        document.querySelectorAll(".our-skills .skills-container .skill div.skill-progress span.progress").forEach(span=>{
span.style.width=span.dataset.progress;

        })
    }
}
/*Our Skills Animation*/
/*PopUp Starts*/
document.querySelectorAll(".our-gallery .gallery-container img").forEach(img=>{
img.onclick=function(e){
let overLay=document.createElement("div");
overLay.classList.add("overlay");
document.body.appendChild(overLay);
let popUp=document.createElement("div")
popUp.classList.add("pop-up")
if(e.target.alt!==null){
    let imgDescreption=document.createElement("h3");
    imgDescreption.classList.add("pop-up-descreption")
    imgDescreption.textContent=e.target.alt;
    popUp.appendChild(imgDescreption);
}
let myImage=document.createElement("img");
myImage.src=e.target.src;
myImage.classList.add("pop-up-image");
popUp.appendChild(myImage);
let xButton=document.createElement("span");
xButton.classList.add("close-button")
xButton.textContent="X";
popUp.appendChild(xButton);
document.body.appendChild(popUp);
}
})
window.onclick=function(e){
    if(e.target.className==="close-button"){
document.querySelector(".pop-up").remove();
document.querySelector(".overlay").remove();

    }
}
/*PopUp Ends*/
/*Navigation System Starts*/
function navigate(elements){
elements.forEach(ele=>{
ele.onclick=function(e){
e.preventDefault();
document.querySelector(e.target.dataset.loaction).scrollIntoView({
    behavior:'smooth'
})
}
})
}
navigate(document.querySelectorAll(".landing-page .header ul li a"));
navigate(document.querySelectorAll(".nav-bullets li"));

document.querySelectorAll(".setting-box3 span").forEach(span=>{
span.onclick=function(e){
removeActive(document.querySelectorAll(".setting-box3 span"),e.target)
    localStorage.setItem("show/hide",e.target.dataset.display)
    if(e.target.dataset.display==="yes"){
        document.querySelector(".nav-bullets").style.display="block";
    }
    else{
        document.querySelector(".nav-bullets").style.display="none";
    }
}

})
if(localStorage.getItem("show/hide")){
if(localStorage.getItem("show/hide")==="no"){
    document.querySelector(".nav-bullets").style.display="none"
    document.querySelector(".setting-box3 span:first-of-type").classList.remove("active")
    document.querySelector(".setting-box3 span:last-of-type").classList.add("active");
}

}
/*Navigation System Ends*/
/*Reset Option Starts*/
document.querySelector(".settings .reset").onclick=function(){
    localStorage.clear();
location.reload();
}
/*Reset Option Ends*/
/*Header Bars-Icon System Starts*/
let myIcon=document.querySelector(" .landing-page .header i");
let myList=document.querySelector(" .landing-page .header ul");
myIcon.onclick=function(e){
    e.stopPropagation();
 myIcon.classList.toggle("app")
   myList.classList.toggle("app")
}
myList.onclick=function(e){
e.stopPropagation();
}
window.addEventListener("click",(e)=>{
    if(e.target!==myIcon&&e.target!==myList){
        myList.classList.remove("app");
        myIcon.classList.remove("app");
    }
})
/*Header Bars-Icon System Ends*/