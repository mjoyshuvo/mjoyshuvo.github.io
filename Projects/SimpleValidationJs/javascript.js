function check(){
	var email1 = document.getElementById('email1');
	var email2 = document.getElementById('email2');
	var pass1 = document.getElementById('password1');
	var pass2 = document.getElementById('password2');
	
	if (email1.value != email2.value) {

		alert("Email id mismatch");
		
	}
	else if(pass1.value != pass2.value){
			
		alert("Password didn't match");
		
		return false;
	}
}

