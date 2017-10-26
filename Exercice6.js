function afficher(){
  var nbr1 = document.getElementById('premier_nombre').value;
  var nbr2 = document.getElementById('deuxieme_nombre').value;
  if (isNaN(nbr1) ==false && isNaN(nbr2) ==false && nbr2 != 0) {
    var result = (nbr1) % (nbr2);
    alert('Le résultat est : ' + result);
  }
  else {
    alert('Veuillez saisir un nombre');
  }
}
