function billingFunction(){

  if(document.getElementById('same').checked){

  	//Swapping Values if Checked

    document.getElementById('billingName').value = document.getElementById('shippingName').value;
    document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
    
  }

  else{

  	//Clearing Field if Unchecked

  	document.getElementById('billingName').value="";
  	document.getElementById('billingZip').value ="";

  }
}