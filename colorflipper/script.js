const btn = document.querySelector("button");
const colName = document.querySelector("p");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange () {
    const rndCol = 
        "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";

    document.body.style.backgroundColor = rndCol; 

    colName.innerText = rndCol;
}

btn.addEventListener("click",bgChange);

//아래처럼 array만들어서 할수도 !  
//const btn = document.querySelector("button");
// const colName = document.querySelector("p");
// const  color = ["red","black","purple","yellow","grey","pink"] ; 

// function random() {
//     return Math.floor(Math.random()*color.length) ; 
// }

// function bgChange () {
//     const rndCol = color[random()];  

//     document.body.style.backgroundColor = rndCol; 

//     colName.innerText = rndCol;
// }

// btn.addEventListener("click",bgChange);

