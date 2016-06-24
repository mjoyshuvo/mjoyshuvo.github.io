function upDate(previewPic){
	var v = previewPic.src;
 	document.getElementById('image').style.backgroundImage = 'url("'+ v +'")';
    document.getElementById('image').innerHTML = previewPic.alt;
	}

function unDo(){
    var image = document.getElementById("image");
    image.style.background = "#8e68ff";
    image.innerHTML = "Hover over an image below to display here.";
}