
const digitElement = document.getElementById("digit"); // type : object
let digit = Number(digitElement.innerText); 


const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");


function checkNumber() {
    if (digit === 0 ) {
        digitElement.className = "zero"; 
    }
    if (digit > 0 ) {
        digitElement.className = "positive";
    } 
    if (digit < 0 ) {
        digitElement.className = "negative";
    } 
}


decrease.addEventListener("click", () => {
    digit = digit - 1; 
    digitElement.innerText = digit;
    checkNumber();

});

reset.addEventListener("click", () => {
    digit = 0;
    digitElement.innerText = digit;
    checkNumber();
})

increase.addEventListener("click",() => {
    digit  = digit + 1;
    digitElement.innerText = digit;
    checkNumber();
})


// 0 이 되면 digit div 에 zero class 추가 해서 색깔바꾸기 
// 0 이 아니면 zero class 제거하기 



