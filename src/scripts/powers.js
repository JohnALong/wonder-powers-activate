
// click event on activate flight button affecting flight section
document.getElementById("activate-flight").addEventListener("click", function() {
    document.querySelector("#flight").className = "enabled";
})

// click event on act mind reading button affecting mind reading section
document.getElementById("activate-mindreading").addEventListener("click", function() {
    document.querySelector("#mindreading").className = "enabled";
})

// click event on activate xray button affecting xray section
document.getElementById("activate-xray").addEventListener("click", function() {
    document.querySelector("#xray").className = "enabled";
})
// // creating variable for nodelist returned by querySelectorAll
let allPowerOn = document.querySelectorAll(".power")
console.log("should be 3", allPowerOn);

const turnOn = function () {
for (let i = 0; i < allPowerOn.length; i++) {
    console.log("test", allPowerOn[i].classList);
    allPowerOn[i].classList.remove("disabled");
    allPowerOn[i].classList.add("enabled");
    }
}
const turnOff = function () {
    for (let i = 0; i < allPowerOn.length; i++) {
        console.log("test", allPowerOn[i].classList);
        allPowerOn[i].classList.remove("enabled");
        allPowerOn[i].classList.add("disabled");
        }
    }
document.getElementById("activate-all").addEventListener("click", turnOn);
document.getElementById("deactivate-all").addEventListener("click", turnOff);



// click event on disable all button to affect all sections
// document.getElementById("activate-all").addEventListener("click", function() {