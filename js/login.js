let passwardNumber=document.querySelectorAll(".passward-number");
let numberButton=document.querySelectorAll(".number-button");
let numberButtonAfter=document.querySelectorAll(".passward-number:after");
let m=0;
for(let i=0;i<numberButton.length;i++){
    numberButton[i].onclick=function () {
        passwardNumber[m].style.color="#8a5733";
        // numberButtonAfter[m].style.background="#8a5733";
        m=++m;
    }
}