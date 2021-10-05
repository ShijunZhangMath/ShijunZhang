
/*input html string in js
dddd<span id="zsj"></span>dddd
<script type="text/javascript">
	    var navBarItem=document.getElementById("zsj")
    document.write(navBarItem)
    navBarItem.innerHTML="zsjzsj"	
</script>*/
// alert(screen.width)






//screen.width window.outerWidth return width  in terms of point  1 pt=1/72 inch
// screen.innerWidth returns width in point for PCs
// screen.innerWidth returns width in css px for cellphones
var navBarFontSize=20;
var footerFontSize=20;

var	w=window.innerWidth;
var	h=window.innerHeight;
var sh=window.screen.height;
var sw=window.screen.width;
var screenRatio=Math.max(sh,sw)/Math.min(sh,sw);
/*w=Math.max(w0,h0);
h=w0+h0-w;*/
var phoneOrPc=0;
// 1.432 ipad pro 11
if (w<=h && screenRatio>=1.33) {
/*	h=Math.max(w0,h0);
	w=w0+h0-h;*/
	phoneOrPc=1;	
} 
// return 1 if phone; return 0 if pc

//window.innerWidth //width of browser
// window.orientation is undefined in pc, use window.screen.orientation.angle instead
// window.screen.orientation.angle=0 usually for pc
// window.screen.orientation.angle is not valid for ios devices

// use typeof to test whether a variable is defined
// typeof(aa)="undefined" if aa is not defined
// typeof(aa.name)="undefined" if aa is defined and aa does not have an attribute `name`
// typeof(aa.name) return error (js stopes) if aa is not defined

/*var myorientation=0;

if (typeof(window.orientation)=="undefined") { 
	if (typeof(window.screen.orientation)!="undefined"){
		myorientation=window.screen.orientation.angle;
	}
} else {
	myorientation=window.orientation;
}
// verical phone
if (window.innerHeight>=window.innerWidth && Math.abs(myorientation-90)==90) {
	h=Math.max(window.innerWidth,window.innerHeight);
	w=window.innerWidth+window.innerHeight-h;
	phoneOrPc=1;	
} 
//alert(window.innerWidth+'s'+window.innerHeight+'s'+window.screen.orientation.angle+'s'+phoneOrPc)

// horizontal phone, it is regarded as a PC
if (window.innerHeight<=window.innerWidth && Math.abs(myorientation)==90) {
	h=Math.min(window.innerWidth,window.innerHeight);
	w=window.innerWidth+window.innerHeight-h;
	phoneOrPc=0;	
} */

// if (window.orientation == 180 || window.orientation == 0) {
//       alert('竖屏')
//       }













// define a function to test pathname
function testPN(pn) {
var currentPN=document.location.pathname;
if (currentPN.match(pn)==null){return 0;}
else {return 1;}
}

//check whether this page is homepage
var cvOrNot=testPN("/cv");
var publicationOrNot=testPN("/publication");
var moreOrNot=testPN("/more");
var interestOrNot=testPN("/interest");
var homeOrNot=1-cvOrNot-publicationOrNot-moreOrNot-interestOrNot;
// return 1 if home; return 0 if not


/*add links or metas to head*/
// add icon
var iconN, iconPN;
iconN='luckyClover';
if (homeOrNot) {iconPN = "./file/img/"+iconN+".ico";} else { iconPN = "../file/img/"+iconN+".ico";}

var linkNew = document.createElement("link");
linkNew.rel = "shortcut icon"; 
linkNew.href=iconPN;
document.getElementsByTagName("head")[0].appendChild(linkNew);

var linkNewApple = document.createElement("link");
linkNewApple.rel = "apple-touch-icon"; 
linkNewApple.href=iconPN;
document.getElementsByTagName("head")[0].appendChild(linkNewApple);




// Add HTML to nav bar
var navBarHTML=document.getElementById("navBarHTML");
var myNavBarHTML = new Array();
myNavBarHTML[0]='<nav> <ul class="navBarContainer navBarLinkColor" id="navBar">';
if (homeOrNot){
	myNavBarHTML[1]='<li class="navBarItem" id="navBarHome">	  <a href="./" class="activeLinkColor"> Shijun Zhang </a>    </li>';
	myNavBarHTML[2]='<li class="navBarItem">	  <a href="./publication/"> Publication </a>  		 </li>';
	myNavBarHTML[3]='<li class="navBarItem">      <a href="./interest/"> Interest </a>    			</li>';
	myNavBarHTML[4]='<li class="navBarItem">      <a href="./cv/">  CV </a>    		</li>';
	myNavBarHTML[5]='<li class="navBarItem">      <a href="./more/"> More </a>    					</li>';
}
else {
	myNavBarHTML[1]='<li class="navBarItem" id="navBarHome">   <a href="../"> Shijun Zhang </a>    </li>';

	if (publicationOrNot) {
		myNavBarHTML[2]='<li class="navBarItem">  <a href="../publication/" class="activeLinkColor"> Publication </a>  </li>';
	}
	else {
		myNavBarHTML[2]='<li class="navBarItem">  <a href="../publication/"> Publication </a>  		 </li>';
	}

	if (interestOrNot) {
		myNavBarHTML[3]='<li class="navBarItem">  <a href="../interest/" class="activeLinkColor"> Interest </a>  </li>';
	}
	else {
		myNavBarHTML[3]='<li class="navBarItem">  <a href="../interest/"> Interest </a>  		 </li>';
	}

	if (cvOrNot) {
		myNavBarHTML[4]='<li class="navBarItem">  <a href="../cv/" class="activeLinkColor"> CV </a>  </li>';
	}
	else {
		myNavBarHTML[4]='<li class="navBarItem">  <a href="../cv/"> CV </a>  		 </li>';
	}

	if (moreOrNot) {
		myNavBarHTML[5]='<li class="navBarItem">  <a href="../more/" class="activeLinkColor"> More </a>  </li>';
	}
	else {
		myNavBarHTML[5]='<li class="navBarItem">  <a href="../more/"> More </a>  		 </li>';
	}
}
/*Starting with / returns to the root directory and starts there

./file/doc.pdf    =    file/doc.pdf

Starting with ../ moves one directory backward and starts there

Starting with ../../ moves two directories backward and starts there (and so on...)

To move forward, just start with the first sub directory and keep moving forward.
*/
myNavBarHTML[6]='</ul></nav>'+'<div id="navBarRule" style="position:fixed; top: auto; left:0px;width:100%;">';
myNavBarHTML[7]='<hr class="myHr"></div><div id="vspaceAfterNavBar"></div> '; 
navBarHTML.innerHTML=myNavBarHTML.join('')  
/*.join() has commas
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
*/  
  
//navBar setting
var navBar=document.getElementById("navBar");
//set navBar fontsize
var navBarFontSize=0.013*w;
if (phoneOrPc) {navBarFontSize=0.0295*w;}

navBar.style.setProperty("font-size",navBarFontSize+"px");



/*navBar.style.setProperty("font-weight",440);*/
var navBarHome=document.getElementById("navBarHome");
navBarHome.style.setProperty("font-size",navBarFontSize*1.8+"px");
navBarHome.style.setProperty("font-weight",440);
if (phoneOrPc){
	navBarHome.style.setProperty("padding-right","16%");
}else{
	navBarHome.style.setProperty("padding-right","35%");
}

var navBarH=window.getComputedStyle(navBar,null).getPropertyValue("height");
var navBarRule=document.getElementById("navBarRule");
navBarRule.style.top=navBarH;
/*navBarRule.style.backgroundColor="red";*/
var vspaceAfterNavBar=document.getElementById("vspaceAfterNavBar");
vspaceAfterNavBar.style.height=navBarH;






//  add footer

var footer=document.getElementById("footer");
var myFooter = new Array();

myFooter[0]=" <div style='background-color:rgba(240,240,240,0.95); display:block;position:sticky;'>";
myFooter[1]="<div style='height:"+h*0.053+"px;'></div>";// add vspace
myFooter[2]=" Email:&ensp;zhangshijun@u.nus.edu &ensp;<b>or</b>&ensp; shijun.math@outlook.com <br>";
myFooter[3]="Address:&ensp;Department of Mathematics (NUS), Singapore 119076 ";

/*var footerImgPN="../file/img/zsjBlue.gif";
if (homeOrNot) {var footerImgPN="./file/img/zsjBlue.gif";} 
var footerPicWidth=w*0.018*12*2.2;
if (phoneOrPc) {footerPicWidth=w*0.018*12*2*2.2;}
myFooter[2]="<img src=" +  footerImgPN   +" style='width:"+ footerPicWidth +"px'>";*/
myFooter[4]="<div id='backgroundSource'></div> Last updated on October 5, 2021";
myFooter[5]="<div style='height:"+h*0.036+"px;'></div> </div>";
/*myFooter[3]="<div style='height:30px'> </div>";*/
footer.innerHTML=myFooter.join('') 


var myfooterFontSize=w*0.01*1.8*0.75; 
var myfooterLineHeight=w*0.01*1.8*0.9980;
if (phoneOrPc) {
	 myfooterFontSize=w*0.01*1.8*0.6*2.1; 
	myfooterLineHeight=w*0.01*1.8*0.980*2.05;
	}

footer.setAttribute("style","text-align:center;text-size-adjust:none;-webkit-text-size-adjust:none; ");
footer.style.fontSize=myfooterFontSize+"px";
footer.style.lineHeight=myfooterLineHeight+"px";
footer.style.maxHeight= "100%";









//add style in js
if (phoneOrPc){  var h1Size=w*0.04735; var pageWidth=0.999*w; lineHeight=h1Size*1.23;
} 
else {
		var h1Size=w*0.019; var pageWidth=0.8*w; lineHeight=h1Size*1.12;
	} 

var insertStyle=new Array();
insertStyle[0]=" h1 { font-size:"+h1Size+"px;color:black;text-align:center;font-weight:650;}";
insertStyle[1]=" h2 { font-size:"+h1Size*0.9+"px;color:black;text-align:left;font-weight:545;}";
insertStyle[2]=" h3 { font-size:"+h1Size*0.81+"px;color:black;text-align:left;font-weight:450;}";
insertStyle[3]=" .normalFont {font-size:"+h1Size*0.729+"px;color:#111111;text-align:justify;line-height:"+ lineHeight  +"px;}";
insertStyle[4]=" .pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}"; /* this is overwrite by Css in each index.html*/
/*
insertStyle[8]=" .eqFont {overflow: scroll;text-align:center;font-size:80%;overflow-y: hidden; overflow-x: scroll;}";*/


// styleInJs.innerHTML=insertStyle.join('') 
//InsertStyle will be added in corresponding HTML file, variables are valid in whole HTML file

/*alert('w'+window.innerWidth+'wc'+screen.width)*/


//refresh if the window size is changed
// window.onresize =function(){location.reload();} // it can be replaced by 
//window.addEventListener('resize',function(){location.reload();})

window.addEventListener("orientationchange", function (){ "use strict"; window.location.reload();});

/*if (w>=h && screenRatio<=1.78 && screenRatio>=1.499) {
	window.addEventListener('resize', function () { "use strict"; window.location.reload(); });
}*/

// reload the page if its orientation is changed
