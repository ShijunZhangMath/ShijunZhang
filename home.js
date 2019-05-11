
/*input html tring in js
dddd<span id="zsj"></span>dddd
<script type="text/javascript">
	    var navBarItem=document.getElementById("zsj")
    document.write(navBarItem)
    navBarItem.innerHTML="zsjzsj"	
</script>*/

/*screen.height, window.outerHeight, and window.innerHeight are nomal in PCs (the cases for width are similar)
But screen.height, window.outerHeight is strange in Phones, only window.innerHeight is fine (the cases for width are similar)*/
var	w=screen.width;
var	h=screen.height;
var phoneOrPc=0;
if (w<=h && window.innerWidth<=window.innerHeight) {
	w=window.innerWidth;
	h=window.innerHeight;
	phoneOrPc=1;
}

var zsjPhoto=document.getElementById("zsjPhoto")
if (phoneOrPc==1) {zsjPhoto.style.width=w*0.75 +"px"} else { zsjPhoto.style.width=w*0.35 +"px"}




if (phoneOrPc==0){
	document.getElementById("introduction").style.lineHeight=w*0.055421+"px";
document.getElementById("introduction").style.fontSize=w*0.0195421+"px";
document.getElementById("introduction").style.fontWeight=520;
}
else {	document.getElementById("introduction").style.lineHeight=w*0.055421+"px";
document.getElementById("introduction").style.fontSize=w*0.02365421+"px";
document.getElementById("introduction").style.fontWeight=520;}


/*insert Css*/ 
var pageWidth=0
if (phoneOrPc==0) {pageWidth=0.85*w} else { pageWidth=0.9*w }
var insertHomeCss=".pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}"
var styleInJsNew=document.getElementById("styleInJs");
styleInJs.innerHTML=insertStyle.join('')+insertHomeCss


