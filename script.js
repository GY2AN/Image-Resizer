let displayWidth = document.getElementById("displayPx");
let ErrorMessage = document.getElementById("warningMessage");
let elementImage = document.getElementById("image");

let minImageWidth = 20;
let maxImageWidth = 300;
let ogWidth = 50;

elementImage.style.width = ogWidth + "px";
displayWidth.textContent = ogWidth + "px";

function onDec(){
    if(ogWidth <= minImageWidth){
        ErrorMessage.textContent = "Can't be Resized further, Not visible with the naked human eyes";
    }else{
        elementImage.style.width = ogWidth - 5;
        displayWidth.textContent = ogWidth - 5 + "px";
        ErrorMessage.textContent = "";
    }
}


