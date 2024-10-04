var ranNumber = Math.floor(Math.random() * 6) + 1;

var ranImage = "dice" + ranNumber + ".png";

var ranImageSource = "./images/" + ranImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ranImageSource);

var ranNumber2 = Math.floor(Math.random() * 6) +1;

var ranImageSource2 = "./images/dice" + ranNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ranImageSource2);

if(ranNumber>ranNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(ranNumber == ranNumber2){
    document.querySelector("h1").innerHTML = "Its a draw";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
