var forward = document.getElementById("next")
var backward = document.getElementById("prev")

var Qoutes =[
 `انما نحن العظيمة فلسطين نحبها نيابة عن كل الذين باعوها`,
    `
    وسوف تستمر مسيرة النصر حتى يرفرف العلم الفلسطيني في القدس وفي كل فلسطين .
    `,
    `
    أن تكون فلسطنيًا يعني ان تصاب بأمل لا شفاء منه  
    `,
    `
    يبدو أن تحرير العقل العربي أصعب من تحرير فلسطين .`
]

var count = 0;
const myElement = document.getElementById("innerText")

forward.addEventListener("click", function() {
    count++;
    if (count == Qoutes.length){
        count=0
    }
    console.log(count);
    myElement.classList.add("transition-effect");
    setTimeout(() => {
        myElement.innerText=Qoutes[count];
        myElement.classList.remove("transition-effect");
      }, 300);

})
backward.addEventListener("click", function() {
    count--;
    if (count < 0){
        count=Qoutes.length-1;
    }
    console.log(count);
    myElement.classList.add("transition-effect");
    setTimeout(() => {
        myElement.classList.remove("transition-effect");
        myElement.innerText=Qoutes[count];
      }, 300);
})

let toggeler = document.querySelector(".toggeler");
let nav = document.querySelector("#nav");
let searchBox = document.querySelector(".searchBox");

toggeler.addEventListener("click", function() {
    nav.classList.toggle("active");
    searchBox.classList.toggle("hidden");
})

