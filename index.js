function select_user(calificacion) {
  var puntaje = document.getElementsByClassName("number").value = calificacion;
  document.getElementById("boton").classList.remove("disabled2");
  document.getElementById("textos").innerHTML= "You selected "+ puntaje +" out of 5";
}

function card() {
    document.getElementById("card2").classList.remove("displayCard");
    document.getElementById("card1").classList.add("displayCard");
}