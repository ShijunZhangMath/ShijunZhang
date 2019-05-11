
/*input html tring in js
dddd<span id="zsj"></span>dddd
<script type="text/javascript">
	    var navBarItem=document.getElementById("zsj")
    document.write(navBarItem)
    navBarItem.innerHTML="zsjzsj"	
</script>*/

var	w=screen.width;
var	h=screen.height;
var navBarFontSize=20;
var footerFontSize=20;
var phoneOrPc=0;
if (w<=h && window.innerWidth<=window.innerHeight) {
	w=window.innerWidth;
	h=window.innerHeight;
	phoneOrPc=1;
}




//navBar setting
var navBar=document.getElementById("navBar");
var whitSpaceForNavBar=document.getElementById("whitSpaceForNavBar");
/*add white space for nav bar*/
whitSpaceForNavBar.style.height=window.getComputedStyle(navBar,null).getPropertyValue("height");
//set navBar fontsize

var narVavBarFontSize=0.018*w;
if (phoneOrPc==1) {narVavBarFontSize=0.028*w;}

navBar.style.setProperty("font-size",narVavBarFontSize+"px");
navBar.style.setProperty("font-weight",540);
var leftMostNavBarItem=document.getElementById("leftMostNavBarItem")
if (phoneOrPc==0){leftMostNavBarItem.style.width=w*0.0655421+"px"}





/*add footer*/
function testPN(pn) {
var currentPN=document.location.pathname;
if (currentPN.match(pn)==null){return 0;}
else {return 1;}
}
//check whether this page is homepage
var homeOrNot=testPN("/cv")+testPN("/publication")+testPN("/showcase")+testPN("/interest");
if (homeOrNot>0.5) {footerImgPN="../file/img/zsjBlue.gif"} else {footerImgPN="./file/img/zsjBlue.gif"}
footer=document.getElementById("footer");
var myFooter = new Array();
myFooter[0]="<div style='height:30px'> </div> Email:&ensp;zhangshijun@u.nus.edu <b>or</b> sjzhang.math@outlook.com <br>";
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
if (phoneOrPc==0) {var h1Size=w*0.02318; pageWidth=0.8*w;} else {  var h1Size=w*0.0360318; pageWidth=0.9*w;}
var insertStyle=new Array()
insertStyle[0]=" h1 { font-size:"+h1Size+"px;color:black;text-align:center;font-weight:650;}";
insertStyle[1]=" h2 { font-size:"+h1Size*0.912+"px;color:black;text-align:left;font-weight:545;}";
insertStyle[2]=" h3 { font-size:"+h1Size*0.812+"px;color:black;text-align:left;font-weight:450;}";
insertStyle[3]=" .normalFont { font-size:"+h1Size*0.712+"px;color:black;text-align:left;line-height:"+h1Size*0.999  +"px;}";
insertStyle[4]=" .pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}";
insertStyle[8]=" .addWhiteSpaceOne { height:"+h1Size+"px;}";
insertStyle[9]=" .addWhiteSpaceTwo { height:"+h1Size*0.8 +"px;}";
insertStyle[10]=" .addWhiteSpaceThree { height:"+h1Size*0.6+"px;}";
/*styleInJs.innerHTML=insertStyle.join('')*/

/*alert('w'+window.innerWidth+'wc'+screen.width)*/


/*//refresh if the window size is changed
window.onresize =function(){location.reload()}*/
