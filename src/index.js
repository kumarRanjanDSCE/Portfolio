function aboutfun(){
    // window.scrollTo(0,680);
    var ch=document.getElementsByClassName("about1")[0];
    ch.scrollIntoView({
        behavior:"smooth"
    })
}

function contactmefun(){
    var ch=document.getElementsByClassName("Contact")[0];
    ch.scrollIntoView({
        behavior:"smooth"
    })
}
function projectfun(){
    var ch=document.getElementsByClassName("Project")[0];
    ch.scrollIntoView({
        behavior:"smooth"
    })
}
function educationfun(){
    var ch=document.getElementsByClassName("Edu")[0];
    ch.scrollIntoView({
        behavior:"smooth"
    })
}
function dotfun(event){
    // console.log(event);
    event.parentNode.nextElementSibling.style.display="flex";
}
function closefun(event){
        event.parentNode.style.display="none";
}
document.getElementsByClassName(" fa-bars")[0].addEventListener("click",()=>{
    let con=document.getElementsByClassName("left-container")[0];
    let con2=document.getElementsByClassName("left")[0];
    con.style.animation="fadeIn 0.15s linear forwards";
    con2.style.animation="moveleft 0.15s linear forwards";
    con.style.display="block";
    con.addEventListener("click",()=>{
        con.style.animation="fadeIn 0.5s linear reverse";
        con2.style.animation="moveleft 0.5s linear reverse forwards";
        setTimeout(()=>{
            con.style.display="none"
        },500)
    })  
})

