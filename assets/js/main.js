window.onload = function(){

	var element = document.querySelector(".form");
		element.addEventListener("submit", function(event){

		event.preventDefault();

	});

	function spanAlert(id,message,display){
		id.nextElementSibling.innerText = message;
		id.nextElementSibling.style.display = display;
	}

	var contentForm = document.getElementsByClassName("content");

	var validateEmpty = function(){

		if(this.value.trim().length == 0){
			this.value = "";
			spanAlert(this, "Este campo es obligatorio", "inline-block");
		}else{
			spanAlert(this, "", "none");
		}
	}

	for(var i = 0; i < contentForm.length; i++){
		contentForm[i].onblur = validateEmpty;
	}

	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");


	var validateLetters = function(e){
		var codigo = e.keyCode;
		if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90) || codigo==39 || codigo==32){
			spanAlert(this,"","none");
			return true;
		}else{
			spanAlert(this,"Este campo sólo permite letras","inline-block");
			return false;
		}
	}

	nombre.onkeypress = validateLetters;
	apellido.onkeypress = validateLetters;

	var numDni = document.getElementById("dni");

	var validateDni = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 7){
			spanAlert(this,"","none");
			return true;
		}else{
			spanAlert(this,"Ingrese DNI válido","inline-block")
			return false;
		}
	}

	numDni.onkeypress = validateDni;

	var celular = document.getElementById("cellphone");

	var validateCellphone = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 8){
			spanAlert(this,"","none");
			return true;
		}else{
			spanAlert(this,"Ingrese un número celular válido","inline-block")
			return false;
		}
	}

	celular.onkeypress = validateCellphone;

	var telefono = document.getElementById("phone");

	var validatePhone = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 6){
			spanAlert(this,"","none");
			return true;
		}else{
			spanAlert(this,"Ingrese un número telefónico válido","inline-block")
			return false;
		}
	}

	telefono.onkeypress = validatePhone

	var contrasenia = document.getElementById("password");
	var confirmar = document.getElementById("password-confirm");

	var verifyPassword = function(){

		if(confirmar.value != contrasenia.value){
			spanAlert(confirmar,"Las contraseñas deben coincidir","inline-block")
		}else{
			spanAlert(confirmar,"","none");
		}
	}

	confirmar.onblur = verifyPassword
}

/*
	var nombre = document.getElementById("name");
	var regexName = /([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
	var regexNameBasic = /^[A-Z]{1}/;

	var nameValidate = function(){

		if(nombre.test(regexNameBasic)){
			alert("Los nombres deben empezar con una mayúscula")
		}

	}

	nombre.onkeypress = nameValidate;

	var contentForm = document.getElementsByClassName("content");
	
	var validate = function(){

		if(this.value.trim().length == 0){
			this.value = "";
			this.nextElementSibling.innerText = "Este campo es obligatorio";
			this.nextElementSibling.style.display = "inline-block"
		}else{
			this.nextElementSibling = "";
			this.nextElementSibling.style.display = "none"
		}

	}

	for(var i = 0; i < contentForm.length; i++){
		contentForm[i].onblur = validate;
	}
}
 
*/