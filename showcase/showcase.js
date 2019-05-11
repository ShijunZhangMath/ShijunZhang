
/*input html tring in js
dddd<span id="zsj"></span>dddd
<script type="text/javascript">
	    var navBarItem=document.getElementById("zsj")
    document.write(navBarItem)
    navBarItem.innerHTML="zsjzsj"	
</script>*/

var	w=screen.width;
var	h=screen.height;
var phoneOrPc=0;
if (w<=h && window.innerWidth<=window.innerHeight) {
	w=window.innerWidth;
	h=window.innerHeight;
	phoneOrPc=1;
}

/*var zsjPhoto=document.getElementById("zsjPhoto")
if (phoneOrPc==1) {zsjPhoto.style.width=w*0.935 +"px"} else { zsjPhoto.style.width=w*0.35 +"px"}




if (phoneOrPc==0){
	document.getElementById("introduction").style.lineHeight=w*0.055421+"px";
document.getElementById("introduction").style.fontSize=w*0.0195421+"px";
}
else {document.getElementById("introduction").style.lineHeight=w*0.055421+"px";
document.getElementById("introduction").style.lineHeight=w*0.055421+"px";}*/


if (phoneOrPc==0) {var pageWidth=0.75*w;var showcaseImgWidth=w*0.30} else {var pageWidth=0.86*w;var showcaseImgWidth=w*0.60;}
var styleInJsNew=document.getElementById("styleInJs");
var insertShowcaseJs=" .pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}";
insertShowcaseJs+=" .showcaseImg { width:"+showcaseImgWidth+"px;}"
styleInJs.innerHTML=insertStyle.join('')+insertShowcaseJs




