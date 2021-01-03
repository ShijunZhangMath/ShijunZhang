
/*input html tring in js
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
var	w0=window.innerWidth;
var	h0=window.innerHeight;
w=Math.max(w0,h0);
h=w0+h0-w;
var navBarFontSize=20;
var footerFontSize=20;
var phoneOrPc=0;
//window.innerWidth //width of browser
// window.orientation is undefined in pc, use window.screen.orientation.angle instead
// window.screen.orientation.angle=0 usually for pc
// window.screen.orientation.angle is not valid for ios devices

// use typeof to test whether a variable is defined
// typeof(aa)="undefined" if aa is not defined
// typeof(aa.name)="undefined" if aa is defined and aa does not have an attribute `name`
// typeof(aa.name) return error (js stopes) if aa is not defined
var myorientation=0;

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
} 

// if (window.orientation == 180 || window.orientation == 0) {
//       alert('竖屏')
//       }



//navBar setting
var navBar=document.getElementById("navBar");
var whitSpaceForNavBar=document.getElementById("whitSpaceForNavBar");
/*add white space for nav bar*/
whitSpaceForNavBar.style.height=window.getComputedStyle(navBar,null).getPropertyValue("height");
//set navBar fontsize

var narVavBarFontSize=0.02*w;
if (phoneOrPc==1) {narVavBarFontSize=0.0342*w;}

navBar.style.setProperty("font-size",narVavBarFontSize+"px");
navBar.style.setProperty("font-weight",440);
var leftMostNavBarItemWidth=w*0.0655421;
if (phoneOrPc==1){leftMostNavBarItemWidth=w*0.032}
document.getElementById("leftMostNavBarItem").style.width=leftMostNavBarItemWidth+"px";




/*add footer*/
function testPN(pn) {
var currentPN=document.location.pathname;
if (currentPN.match(pn)==null){return 0;}
else {return 1;}
}
//check whether this page is homepage
var homeOrNot=testPN("/cv")+testPN("/publication")+testPN("/more")+testPN("/interest");
if (homeOrNot>0.5) {footerImgPN="../file/img/zsjBlue.gif"} else {footerImgPN="./file/img/zsjBlue.gif"}
footer=document.getElementById("footer");
var myFooter = new Array();
myFooter[0]="<div style='height:30px'> </div> Email:&ensp;zhangshijun@u.nus.edu <b>or</b> shijun.math@outlook.com <br>";
myFooter[1]="Address:&ensp;Department of Mathematics, 10 Lower Kent Ridge Road, Singapore 119076 <br>";
myFooter[2]="<img src=" +  footerImgPN   +" style='width:"+w*0.018*12*1.8+"px'>";
myFooter[3]="<div style='height:30px'> </div>";
footer.innerHTML=myFooter.join('') /*.join() has commas*/
footer.setAttribute("style","text-align:center;font-size:"+w*0.01*1.8*0.6+"px;line-height:"+w*0.01*1.8*0.9588+"px;");


/*add links or metas to head*/
var linkNew = document.createElement("link");
linkNew.rel = "icon"; 
if (homeOrNot>0.5) {linkNew.href = "../file/img/nus.jpg";} else { linkNew.href = "./file/img/nus.jpg";}
document.getElementsByTagName("head")[0].appendChild(linkNew);
linkNew = document.createElement("link");
linkNew.rel = "apple-touch-icon"; 
if (homeOrNot>0.5) {linkNew.href = "../file/img/nus.jpg";} else { linkNew.href = "./file/img/nus.jpg";}
document.getElementsByTagName("head")[0].appendChild(linkNew);



/*add style in js*/
if (phoneOrPc==0) {var h1Size=w*0.024; pageWidth=0.8*w;} else {  var h1Size=w*0.045; pageWidth=0.999*w;}
var insertStyle=new Array()
insertStyle[0]=" h1 { font-size:"+h1Size+"px;color:black;text-align:center;font-weight:650;}";
insertStyle[1]=" h2 { font-size:"+h1Size*0.9+"px;color:black;text-align:left;font-weight:545;}";
insertStyle[2]=" h3 { font-size:"+h1Size*0.8+"px;color:black;text-align:left;font-weight:450;}";
insertStyle[3]=" .normalFont {font-size:"+h1Size*0.7+"px;color:#555555;text-align:left;line-height:"+h1Size*1.2444  +"px;}";
insertStyle[4]=" .pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}"; /* this is overwrite by Css in each index.html*/
insertStyle[5]=" .addWhiteSpaceOne { height:"+h1Size+"px;}";
insertStyle[6]=" .addWhiteSpaceTwo { height:"+h1Size*0.7 +"px;}";
insertStyle[7]=" .addWhiteSpaceThree { height:"+h1Size*0.4+"px;}";
insertStyle[8]=" .eqFont {font-size:"+pageWidth*0.024*0.88+"px;color:#555555;text-align:left;line-height:"+h1Size*0.999  +"px;}";


// styleInJs.innerHTML=insertStyle.join('') 
//InsertStyle will be added in corresponding HTML file, variables are valid in whole HTML file

/*alert('w'+window.innerWidth+'wc'+screen.width)*/


//refresh if the window size is changed
// window.onresize =function(){location.reload();} // it can be replaced by 
//window.addEventListener('resize',function(){location.reload();})
window.addEventListener("orientationchange",function (){location.reload();})
// reload the page if its orientation is changed
