//CREAMOS USUARIO
function Usuarios(id, nombre, username, galerianame, email, birthdate, password, repitpassword, imagenperfil) {
  this.id = id;
  this.nombre = nombre;
  this.username = username;
  this.galerianame = galerianame;
  this.email = email;
  this.birthdate = birthdate;
  this.password = password;
  this.repitpassword = repitpassword;
  this.imagenperfil = imagenperfil;
  //this.tipouser = [ usuario, galeria];
  //this.gustos = [impresionismo, cubismo, contemporaneo, expresionismo];
  this.galerias = [];

}


Usuarios.prototype.crearGaleria = function(id, nombre, descripcion, direccion, horario, telefono, web, email) {
  // CREAMOS GALERIA
  var nuevaGaleria = new Galeria(id, nombre, descripcion, direccion, horario, telefono, web, email);
  nuevaGaleria.nombre = document.getElementById("crear_nombre").value;
  nuevaGaleria.descripcion = document.getElementById("crear_descripcion").value;
  nuevaGaleria.direccion = document.getElementById("crear_address").value;
  nuevaGaleria.horario = document.getElementById("crear_openingTimes").value;
  nuevaGaleria.telefono = document.getElementById("crear_phone").value;
  nuevaGaleria.web = document.getElementById("crear_web").value;
  nuevaGaleria.email = document.getElementById("crear_mailReg").value;




  /*
  this.nombre = document.getElementById("crear_nombre");
  //document.getElementById("crear_nombre") = galeria.nombre;
  this.descripcion = document.getElementById("crear_descripcion"); */

  //this.galerias.push(nuevaGaleria);
};

Usuarios.prototype.eliminarGaleria = function(id) {
  // INCOMPLETO

};