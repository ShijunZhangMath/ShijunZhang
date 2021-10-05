// Create a script element to add background

var bgPN, bgN;


bgN="bubbles"


if (homeOrNot){
	bgPN="./file/background/"+bgN+".js";
}
else{
	bgPN="../file/background/"+bgN+".js";
}

var bg = document.createElement("script");
bg.type = "text/javascript";
bg.src=bgPN;
bg.async=false;
document.body.appendChild(bg);