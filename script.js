        // Verification de nom //
function verificationCaracteresNom(event) {
	 		
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var champNom = document.getElementById('nom');
			
	if(caracteres.indexOf(touche) >= 0) {
        champNom.value += touche;
	} 
			
}
          // Verification de prenom //
function verificationCaracteresPrenom(event) {
    var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var champPrenom = document.getElementById('prenom');

if (caracteres.indexOf(touche)>= 0) {
    champPrenom.value += touche;
}
};
        // Verification de la date de naissance //
function verificationDateDeNaissance() {

        var dateDeNaissance = parseFloat(document.forms["formulaire"].elements["dateDeNaissance"].value);
        var dateDuJour = getDay();
        console.log(dateDuJour);
if(dateDeNaissance >= 2001) {
    document.getElementById("dateDeNaissanceChamp").style.backgroundColor="red";
} else {
    document.getElementById("dateDeNaissanceChamp").style.backgroundColor="green";
}
}    



