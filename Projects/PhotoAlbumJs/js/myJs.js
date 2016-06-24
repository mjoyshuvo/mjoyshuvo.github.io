function openMe(){
	var x = document.getElementById('foo');
	x.className="open";

	//x.style.display="block";
}
function closeMe(){
	var x = document.getElementById('foo');
	//x.style.display="none";
	x.className="close";
}