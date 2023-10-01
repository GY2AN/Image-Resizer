let displayWidth = document.getElementById("displayPx");
let ErrorMessage = document.getElementById("warningMessage");
let elementImage = document.getElementById("image");

let minImageWidth = 20;
let maxImageWidth = 300;
let ogWidth = 50;

elementImage.style.width = ogWidth + "px";
displayWidth.textContent = ogWidth + "px";

function onInc(){
    if(ogWidth >= maxImageWidth){
        ErrorMessage.textContent = "Reached the threshold, Won't look good on further increase!";
    } else{
        ogWidth = ogWidth + 5;
        let newWidth = ogWidth;
        elementImage.style.width = newWidth + "px";
        displayWidth.textContent = newWidth + "px";
        ErrorMessage.textContent = "";
    }
}

function onDec(){
    if(ogWidth <= minImageWidth){
        ErrorMessage.textContent = "Can't be Resized further, Not visible with the naked human eyes";
    } else{
        ogWidth = ogWidth - 5;
        let DecWidth = ogWidth;
        elementImage.style.width = DecWidth + "px";
        displayWidth.textContent = DecWidth + "px";
        ErrorMessage.textContent = "";
    }
}


