function verificationCaracteresNom(event) {
	 		
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var champNom = document.getElementById('nom');
			
	if(caracteres.indexOf(touche) >= 0) {
        champNom.value += touche;
	} 
			
}

function verificationCaracteresPrenom(event) {
    var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var champPrenom = document.getElementById('prenom');

if (caracteres.indexOf(touche)>= 0) {
    champPrenom.value += touche;
}
};

function verificationEmail() {
    
    var email = document.getElementById("email");
    var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
    
    if (!testEmail.test(email.value)) {
        document.getElementById("email").style.backgroundColor="red"
        email.focus;
    } else {
        document.getElementById("email").style.backgroundColor="green"
        email.focus;
    }
}






