let passwardNumber = document.querySelectorAll(".passward-number");
let numberButton = document.querySelectorAll(".number-button");
let m = 0;
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].onclick = function () {
        if (i === 9) {
            m=m-1;
                passwardNumber[m].style.color = "#fff";
        }
        else if (i === 11) {
            for (m >= 0; m--;) {
                passwardNumber[m].style.color = "#fff";
            }
        }
        if (m < 0) {
            m = 0;
        }
        else {
            passwardNumber[m].style.color = "#8a5733";
            m++;
        }
    }
}
