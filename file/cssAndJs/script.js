
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
var dayUpdate="October 9, 2021"


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


myNavBarHTML[0]='<nav id="navBar">'+
						'<ul class="navBarContainer navBarLinkColor" id="navBarInner">';

myNavBarHTML[1]='<li class="navBarItem" id="navBarHome">'+
	'<a href="'+relativePath+'" class="myTextShadow '+homeActiveOrNot+'"> Shijun&thinsp;ZHANG </a>'+
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
				'<div id="navBarRule" style="position:fixed; top: auto; left:0px;width:100%;">'+
					'<hr class="myHr">'+
				'</div>';

myNavBarHTML[7]=   '<div id="vspaceAfterNavBar"></div>' +
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
var navBarFontSize=0.0112*w;
if (phoneOrPc) {navBarFontSize=0.03*w;}

navBar.style.setProperty("font-size",navBarFontSize+"px");
navBar.style.setProperty("font-family","Helvetica, sans-serif");

/*navBar.style.setProperty("font-weight",440);*/
var navBarHome=document.getElementById("navBarHome");
navBarHome.style.setProperty("font-weight",430);
navBarHome.style.setProperty("font-family","serif");
/*navBarHome.style.setProperty("font-style","oblique");*/
if (phoneOrPc){
	navBarHome.style.setProperty("padding-right","11%");
	navBarHome.style.setProperty("font-size",navBarFontSize*1.5+"px");
}else{
	navBarHome.style.setProperty("padding-right","27%");
	navBarHome.style.setProperty("font-size",navBarFontSize*1.8+"px");
}

var navBarInner=document.getElementById("navBarInner");
var navBarH=window.getComputedStyle(navBarInner,null).getPropertyValue("height");
var navBarRule=document.getElementById("navBarRule");
navBarRule.style.top=navBarH;
/*navBarRule.style.backgroundColor="red";*/
var vspaceAfterNavBar=document.getElementById("vspaceAfterNavBar");
vspaceAfterNavBar.style.height=navBarH;



//  add footer
var footerFontSize=20;
var footer=document.getElementById("footer");
var myFooter = new Array();

myFooter[0]=" ";

myFooter[1]="<div style='height:"+h*0.046+"px;'></div>";// add vspace

myFooter[2]=" Email:&ensp;zhangshijun@u.nus.edu &ensp;<b>or</b>&ensp; shijun.math@outlook.com <br>";

myFooter[3]="Address:&ensp;Department of Mathematics (NUS), Singapore 119076";


/*var footerImgPN="../file/img/zsjBlue.gif";
if (homeOrNot) {var footerImgPN="./file/img/zsjBlue.gif";} 
var footerPicWidth=w*0.018*12*2.2;
if (phoneOrPc) {footerPicWidth=w*0.018*12*2*2.2;}
myFooter[2]="<img src=" +  footerImgPN   +" style='width:"+ footerPicWidth +"px'>";*/
myFooter[4]="<div id='backgroundSource'></div> Last updated on "+ dayUpdate;

myFooter[5]="<div style='height:1em;'></div> ";


myFooter[6]="<div class='footerLinks'>"+
			" <a href='https://scholar.google.com/citations?user=NZA4ur4AAAAJ&hl=en/' title='Google Scholar'>" +
			"<i class='ai ai-google-scholar-square'></i>    </a>";

myFooter[7]="<a href='https://orcid.org/0000-0003-4115-7891/' title='ORCID'>" +
			" <i class='ai ai-orcid-square'></i>    </a>";

myFooter[8]="<a href='"+relativePath+"file/pdf/CV_ShijunZHANG.pdf' title='Curriculum Vitae'>" +
			" <i class='ai ai-cv-square'></i>      </a>";
/*myFooter[9]="<a href='https://www.researchgate.net/profile/Shijun-Zhang-6/'>" +
			" <i class='ai ai-researchgate-square'></i></a>"+*/
myFooter[9]="</div>";


myFooter[10]="<div style='height:2em;'></div>";
/*myFooter[3]="<div style='height:30px'> </div>";*/
footer.innerHTML=myFooter.join('') 

var myfooterFontSize=w*0.01*1.8*0.75; 
var myfooterLineHeight=myfooterFontSize*1.35;
if (phoneOrPc) {
	 myfooterFontSize=w*0.01*1.8*0.6*2.374; 
		myfooterLineHeight=myfooterFontSize*1.45;
	}
footer.setAttribute("style","text-align:center; ");
footer.style.fontSize=myfooterFontSize+"px";
footer.style.lineHeight=myfooterLineHeight+"px";
/*footer.style.maxHeight= "100%";*/




//add style in js
if (phoneOrPc){  var h1Size=w*0.045; var pageWidth=0.999*w; lineHeight=h1Size*1.22;
} 
else {
		var h1Size=w*0.0185; var pageWidth=0.8*w; lineHeight=h1Size*1.2;
	} 

var insertStyle=new Array();
insertStyle[0]=" h1 { font-size:"+h1Size+"px;color:#242424;text-align:center;font-weight:600;font-family:serif;}";

insertStyle[1]=" h2 { font-size:"+h1Size*0.9+"px;color:#242424;text-align:left;font-weight:500;font-family:sans-serif;}";

insertStyle[2]=" h3 { font-size:"+h1Size*0.81+"px;color:#242424;text-align:left;font-weight:400;font-family:sans-serif;}";

insertStyle[3]=" .normalFont {font-size:"+h1Size*0.729+"px;color:#242424;text-align:left;line-height:";

insertStyle[4]= lineHeight*0.98  +"px;font-family:Helvetica, sans-serif;}";

insertStyle[5]=" .smallFont {font-size:"+h1Size*0.729*0.9+"px;color:#242424;text-align:left;line-height:";

insertStyle[6]= lineHeight*0.85  +"px;font-family:Helvetica, sans-serif;}";

insertStyle[7]=" .footnoteFont {font-size:"+h1Size*0.729*0.9*0.9+"px;color:#242424;text-align:left;line-height:";

insertStyle[8]= lineHeight*0.85*0.9  +"px;font-family:Helvetica, sans-serif;}";

if (phoneOrPc) {
	insertStyle[9]= ".imgWidth {width:88%;padding-top:"+0.0328*h+"px;padding-bottom:"+0.0328*h+"px;}";
}else{
	insertStyle[9]= ".imgWidth {width:68%;padding-top:"+0.025*h+"px;padding-bottom:"+0.0328*h+"px;}";
}

/*insertStyle[9]=" .pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}";*/ /* this is overwrite by Css in each index.html*/
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
