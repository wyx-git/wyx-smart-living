let passwardNumber = document.querySelectorAll(".password-number");
let numberButton = document.querySelectorAll(".number-button");
let m = 0;
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].onclick = function () {
        if (i === 9) {
                passwardNumber[m-1].style.color = "#fff";
			m--;
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
