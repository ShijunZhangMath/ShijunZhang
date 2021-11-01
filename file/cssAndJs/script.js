
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
var dayUpdate="November 1, 2021";


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
	if (currentPN.search('/'+pn)==-1){return 0;}
	else {return 1;}
}

//check whether this page is homepage
var cvOrNot=testPN("cv");
var publicationOrNot=testPN("publication");
var moreOrNot=testPN("more");
var interestOrNot=testPN("interest");
var homeOrNot=1-cvOrNot-publicationOrNot-moreOrNot-interestOrNot;
// return 1 if home; return 0 if not


var relativePath='../';
if (homeOrNot){ relativePath='./';}


/*add links or metas to head*/
// add icon
var iconN, iconPN;
iconN='zsjLogo';
if (homeOrNot) {iconPN = "./file/img/"+iconN+".ico";} else { iconPN = "../file/img/"+iconN+".png";}

var linkNew = document.createElement("link");
linkNew.rel = "shortcut icon"; 
linkNew.href=iconPN;
document.getElementsByTagName("head")[0].appendChild(linkNew);

var linkNewApple = document.createElement("link");
linkNewApple.rel = "apple-touch-icon"; 
linkNewApple.href=iconPN;
document.getElementsByTagName("head")[0].appendChild(linkNewApple);


// add icon library
var iconLibrary = document.createElement("link");
iconLibrary.rel = "stylesheet"; 
iconLibrary.href=relativePath+"file/icon/academicons/css/academicons.min.css";
document.getElementsByTagName("head")[0].appendChild(iconLibrary);

/*var iconLibrary = document.createElement("link");
iconLibrary.rel = "stylesheet"; 
iconLibrary.href=relativePath+"file/icon/zsjIcons.css";
document.getElementsByTagName("head")[0].appendChild(iconLibrary);*/




// Add HTML to nav bar
var navBarHTML=document.getElementById("navBarHTML");
var myNavBarHTML = new Array();

var homeActiveOrNot=" ";
if (homeOrNot){
	homeActiveOrNot=" activeLinkColor";
}

var publicationActiveOrNot=" ";
if (publicationOrNot){
	publicationActiveOrNot=" activeLinkColor";
}

var interestActiveOrNot=" ";
if (interestOrNot){
	interestActiveOrNot=" activeLinkColor";
}

var cvActiveOrNot=" ";
if (cvOrNot){
	cvActiveOrNot=" activeLinkColor";
}

var moreActiveOrNot=" ";
if (moreOrNot){
	moreActiveOrNot=" activeLinkColor";
}


myNavBarHTML[0]='<nav>'+
				'<ul class="navBarContainer navBarLinkColor" id="navBar">';

myNavBarHTML[1]='<li class="navBarItem" id="navBarHome">'+
	'<a href="'+relativePath+'"class="myTextShadow '+homeActiveOrNot+'"> Shijun&thinsp;ZHANG </a>'+
		'</li>';

myNavBarHTML[2]='<li class="navBarItem">'+
					'<a href="'+relativePath+'publication/" class="'+publicationActiveOrNot+'"> Publication </a>'+
				'</li>';

myNavBarHTML[3]='<li class="navBarItem">  <a href="'+relativePath+'interest/" class="'+interestActiveOrNot+'"> Interest </a>  </li>';


myNavBarHTML[4]='<li class="navBarItem">  <a href="'+relativePath+'cv/" class="'+cvActiveOrNot+'"> C&thinsp;V </a>  </li>';


myNavBarHTML[5]='<li class="navBarItem">  <a href="'+relativePath+'more/" class="'+moreActiveOrNot+'"> More </a>  </li>';


/*Starting with / returns to the root directory and starts there

./file/doc.pdf    =    file/doc.pdf

Starting with ../ moves one directory backward and starts there

Starting with ../../ moves two directories backward and starts there (and so on...)

To move forward, just start with the first sub directory and keep moving forward.
*/
myNavBarHTML[6]='</ul>'+
				'<div id="navBarRule" style="position:fixed;left:0px;width:100%;">'+
					'<hr class="myHr">'+
				'</div>';

myNavBarHTML[7]='<div id="vspaceAfterNavBar"></div>' +
				'</nav>'; 

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
var navBarFontSize=0.0114*w;
if (phoneOrPc) {navBarFontSize=0.0300*w;}

navBar.style.setProperty("font-size",navBarFontSize+"px");
navBar.style.setProperty("font-family","Helvetica, sans-serif");

/*navBar.style.setProperty("font-weight",440);*/
var navBarHome=document.getElementById("navBarHome");
navBarHome.style.setProperty("font-weight",420);
navBarHome.style.setProperty("font-family","serif");
/*navBarHome.style.setProperty("font-style","oblique");*/
var navBarH;
if (phoneOrPc){	
	navBarH=navBarFontSize*4.24+"px";
	navBarHome.style.setProperty("padding-right","9.5%");
	navBarHome.style.setProperty("font-size",navBarFontSize*1.585+"px");
}else{
	navBarH=navBarFontSize*4.54+"px";
	navBarHome.style.setProperty("padding-right","28.2%");
	navBarHome.style.setProperty("font-size",navBarFontSize*1.8+"px");
}

navBar.style.setProperty("height",navBarH);
document.getElementById("navBarRule").style.top=navBarH;
document.getElementById("vspaceAfterNavBar").style.height=navBarH;

// Use window.getComputedStyle when loaded
/*window.onload = function() {
	var navBar=document.getElementById("navBar");
	var navBarH=window.getComputedStyle(navBar,null).getPropertyValue("height");
	document.getElementById("navBarRule").style.top=navBarH;
	document.getElementById("vspaceAfterNavBar").style.height=navBarH;
}
*/


//  add footer
var footer=document.getElementById("footer");
var myFooter = new Array();

myFooter[0]="Email:&ensp;zhangshijun@u.nus.edu &ensp;<b>or</b>&ensp; shijun.math@outlook.com";

myFooter[1]="<br>Address:&ensp;Department of Mathematics (NUS), Singapore 119076";


/*var footerImgPN="../file/img/zsjBlue.gif";
if (homeOrNot) {var footerImgPN="./file/img/zsjBlue.gif";} 
var footerPicWidth=w*0.018*12*2.2;
if (phoneOrPc) {footerPicWidth=w*0.018*12*2*2.2;}
myFooter[2]="<img src=" +  footerImgPN   +" style='width:"+ footerPicWidth +"px'>";*/
myFooter[2]="<br>Last updated on "+ dayUpdate;


myFooter[3]="<div class='footerLinks'>"+
			" <a href='https://scholar.google.com/citations?user=NZA4ur4AAAAJ&hl=en/' title='Google Scholar'>" +
			"<i class='ai ai-google-scholar-square'></i>    </a>";

myFooter[4]="<a href='"+relativePath+"cv/' title='Curriculum Vitae'>" +
			" <i class='ai ai-cv-square'></i>      </a>";

myFooter[5]="<a href='https://orcid.org/0000-0003-4115-7891' title='ORCID'>" +
			" <i class='ai ai-orcid-square'></i>    </a>";

myFooter[6]="<a href='https://www.researchgate.net/profile/Shijun-Zhang-6' title='ResearchGate'>" +
			" <i class='ai ai-researchgate-square'></i></a>";

myFooter[7]="</div>";


/*myFooter[3]="<div style='height:30px'> </div>";*/
footer.innerHTML=myFooter.join('');


var myFooterFontSize=w*0.01*1.8*0.75; 
var myFooterLineHeight=myFooterFontSize*1.35;
if (phoneOrPc) {
	 myFooterFontSize=w*0.01*1.8*0.6*2.35; 
	myFooterLineHeight=myFooterFontSize*1.45;
}
footer.style.textAlign="center";
footer.style.fontSize=myFooterFontSize+"px";
footer.style.lineHeight=myFooterLineHeight+"px";
footer.style.maxHeight= "100%";



//add style in js
if (phoneOrPc){  
	var normalFontSize=w*0.045*0.729; var lineHeight=1.671;
} 
else {
	var normalFontSize=w*0.0185*0.729; var lineHeight=1.642;
} 

var insertStyle=new Array();

insertStyle[0]=" .normalFont {font-size:"+normalFontSize+"px;line-height:"+ lineHeight +"em;}";

insertStyle[1]=" .smallFont {font-size:"+normalFontSize*0.9+"px;line-height:"+ lineHeight*0.95 +"em;}";

if (phoneOrPc) {
	insertStyle[2]= ".imgWidth {width:88%;padding-top:"+0.0328*h+"px;padding-bottom:"+0.0328*h+"px;}"+
	".footerLinks a i {font-size:3.2em; margin-left: 0.359em; margin-right: 0.359em;}"+
	".footerLinks {padding-top: 3.2em; padding-bottom: 8.8em; }"+
	"#footer::before {content:' '; display:block; height:4.8em;}" +
	".myHr {height:0.132em;}"+
	".navBarItem {padding-top: 0.66em;padding-bottom: 0.3em;padding-left: 2.1%;padding-right: 2.1%;}";
}else{
	insertStyle[2]= ".imgWidth {width:68%;padding-top:"+0.03826*h+"px;padding-bottom:"+0.0485325*h+"px;}"+
	".footerLinks a i {font-size:2.2em; margin-left: 0.39385em; margin-right: 0.39385em;}"+
	".footerLinks {padding-top: 3.195em; padding-bottom: 7.40em;}"+
	"#footer::before { content:' ';display:block; height:3.6em;}"+
	".myHr {height:0.185em;}"+
	".navBarItem {padding-top: 0.3em;padding-bottom: 0.1em;padding-left: 1.792%;padding-right: 1.792%;}";
}

//InsertStyle will be added in corresponding HTML file, variables are valid in whole HTML file
/*alert('w'+window.innerWidth+'wc'+screen.width)*/

//refresh if the window size is changed
// window.onresize =function(){location.reload();} // it can be replaced by 
//window.addEventListener('resize',function(){location.reload();})

// reload the page if its orientation is changed
window.addEventListener("orientationchange", function (){"use strict"; window.location.reload();});


