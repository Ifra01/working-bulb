
let bulb = document.getElementById("off");
let button_on = document.getElementById("click");
let button_off = document.getElementById("no-click");

button_on.addEventListener("click", function(){
    // bulb.className = "size"
    bulb.src="./images/bulb-on.png"
})

button_off.addEventListener("click", function(){
    // bulb.className = "size"
    bulb.src="./images/bulb-off.png"
})


