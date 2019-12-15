
var myImages= Array.from(document.querySelectorAll(".item img"));
var BoxContainer=document.querySelector(".box-container");
var close=document.getElementById("close");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var currentIndex=0;

for(var i=0;i<myImages.length;i++)
    {
        myImages[i].addEventListener("click",showLightBox)
    }

function showLightBox(e)
{
    BoxContainer.style.display="flex";
    var imgSrc=e.target.src;
    currentIndex=myImages.indexOf(e.target);
    BoxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";
}


close.addEventListener("click",hideLightBox);

function hideLightBox()
{ 
    BoxContainer.style.display="none";
}

next.addEventListener("click",goNext)

function goNext()
{
    currentIndex++;
    if(currentIndex==myImages.length)
        currentIndex=0;
    BoxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentIndex].src+")";
}

prev.addEventListener("click",goPrev)

function goPrev()
{
    currentIndex--;
    if(currentIndex<0)
        currentIndex=(myImages).length-1;
    BoxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentIndex].src+")";
}