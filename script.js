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


