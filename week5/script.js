let body = document.querySelector("body");
function checkWeather() {

let temp =document.querySelector("#temperature");
let temperature = temp.value;
if(temperature>=10 && temperature<20){ 
    console.log("it feels cold");
    body.style.backgroundColor ="lightblue";
} else if(temperature >=20 && temperature < 30) {
    console.log("it feels warm and sunny");
    body.style.backgroundColor ="orange";
} else if(temperature >30) {
    body.style.backgroundColor ="red";
    console.log("it is a scorcher");
} else if(temperature <10) {
    console.log("its a wee bit chilly isnt it");
    body.style.backgroundColor ="gray";
}
}
