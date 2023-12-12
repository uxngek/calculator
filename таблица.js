function dobavite(v){
	document.getElementById("calcinput").value+=v;
	// dobavite(v)-высвечивались те цифры которые в ковычках
	// value+=v-выбраная цифра добавляется к предыдущей цифре

}
function delit(){
	document.getElementById("calcinput").value="";
	// delit()- убирает число с инпута
	// если в value="" написать что-то,то это высветится в инпуте, если ничего то все просто удалится и останется пустое поле 
	var c=document.getElementById("calcinput");
	c.style.backgroundColor="white";
	}


	

function ravno(){
	try{ 
	var result=eval(document.getElementById("calcinput").value);
	 var input=document.getElementById("calcinput");
	// value=eval(document.getElementById("calcinput").value);- обозначает что при сложении или вычитание высветится чему будет равнятся те выбраные числа
	if (result<0){
		input.style.backgroundColor="red";
	}
	else {
		input.style.backgroundColor="white";
	}
	input.value=result;
	}


    catch (error){
		document.getElementById("calcinput").value="Ошибка";
	
	}
}
function pomenyCvet(){
	var zagolovoc=document.getElementById("nazvanie");
	zagolovoc.style.color=newColor();
}
function newColor() {
	var bycv="0123456789ABCDEF";
	var color="#";
	for (var a=0; a<6; a++){
		color=color+bycv[Math.floor(Math.random()*16)];
	}
	return color;
} 
// function pomenyCvet2(){
	// var zagolovoc=document.getElementById("nazvanie");
	// zagolovoc.style.color="red";
	// zagolovoc.style.backgroundColor="yellow";
	// zagolovoc.style.fontFamily="Roboto";
	// zagolovoc.style.paddingLeft="60px";
// }
// function pomenyCvet3(){
	// var zagolovoc=document.getElementById("nazvanie");
	// zagolovoc.style.color="blue";
	// zagolovoc.style.paddingRight="60px";
// }


