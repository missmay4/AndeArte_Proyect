// Ventana emergente comentarios 

/* $(document).ready(function() {
  $(function() {
    $("#dialog").dialog({
      autoOpen: false
    });
    $("#emergente").on("click", function() {
      $("#dialog").dialog("open");
    });
  });
  // Validating Form Fields.....
  $("#submit").click(function(e) {
    var comentario = $("#comentario").val();

  });
}); */


$( document ).ready(

//----------GESTION

$(function() {
  
  $("form[name='formgestion']").validate({
    
    rules: {
     
      galnombre: {
      	required: true,
      	rangelength: [3,20]
      },
      galdescripcion: {
      	required: true,
      	rangelength:[10,150]
      },

      galaddress: {
      	required: true,
      	rangelength:[10,150]
      },

      openingTimes: {
      	required: true,
      	rangelength:[5, 25]
      },

      galphone: {
      	digits: true,
      	rangelength:[9, 9]

      },

      galweb: {
      	url: true
      },

      galemail{
        required: true,
        email: true
      }

      evento{
        rangelength:[5, 25]
      }

      date{
        digits: true,
      }

    },

    // Specify validation error messages
    messages: {

    	// galnombre:"ehhh tu nombre",
    	

    	// // galdescripcion:
    	// // galaddress:
    	// // galphone:{

    	// // }
    	// galweb:"ehh tu web",


  
      // lastname: "Please enter your lastname",
      // password: {
      //   required: "Please provide a password",
      //   minlength: "Your password must be at least 5 characters long"
      // },
      // email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    // submitHandler: function(form) {
    //   form.submit();
    // }
  });
});


//FUNCION JS PARA JAVASCRIPT


function Checkfiles(){
  var fup = document.getElementById('photo-1');
  var fileName = fup.value;
  var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
if(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "doc"){
return true;
} 
else{
alert("Upload Gif or Jpg images only");
fup.focus();
return false;
}

}



//--------------FIN GESTION



//----- VISTA DETALLE
// -----JS Vista Detalle VALORACIÓN Estrellas


$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });

}))


 

