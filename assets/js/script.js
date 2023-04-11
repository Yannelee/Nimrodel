$(()=>{
  //.MOSTRA FORMULARIO EN PANTALLA PEQUEÑA
  let visibleFormComu = () => {
    let element = document.querySelector('#comuniquemonos')
    element.classList.remove('d-none')
    element.classList.add('d-block')

    document.querySelector('#reservar').classList.remove('d-block')
    document.querySelector('#reservar').classList.add('d-none')
  }
  let visibleFormRs = () => {
    let element = document.querySelector('#reservar')
    element.classList.remove('d-none')
    element.classList.add('d-block')

    document.querySelector('#comuniquemonos').classList.remove('d-block')
    document.querySelector('#comuniquemonos').classList.add('d-none')
  }

  let formComu = document.getElementById('comuniquemonos')
  formComu.addEventListener('submit', function(event){
    event.preventDefault();
    if(validFormComu()){
      exitoComu();
    }
  })

  let formRs = document.getElementById('reservar')
  formRs.addEventListener('submit', function(event){
    event.preventDefault();
    if(validFormRsrv()){
      exitoRs();
    }
  })

  //.FUNCIONES REGEX
  let nombreVal = (input)=>{
    let reNombre = /^[a-zñáéíóú]{2,}\s[a-zñáéíóú]{2,}$/i
    return reNombre.test(input)
  }
  let mailVal = (input)=>{
    let reMail = /^[\w\-]+(\.)?[\w\-]+@[\w\-]{2,}\.[\w]{2,}$/i
    return reMail.test(input)
  }
  let telVal = (input)=>{
    let reTel = /^\+(569)[\d]{8}$/
    return reTel.test(input)
  }
  let asistVal = (input)=>{
    let reAsist= /[\d]{1,2}/
    return reAsist.test(input)
  }

  //.VALID FORMULARIO COMUNIQUEMONOS
  let validFormComu = () => {
  let nombre = document.getElementById('nombre').value
  let mail = document.getElementById('email').value
  let telefono = document.getElementById('telefono').value
  let formularioValido = true

    if ( nombre == '' || !nombreVal(nombre)){
      formularioValido = false
      alert('Nombre y apellido son obligatorios')
    }
    if ( mail == '' || !mailVal(mail)){
      formularioValido = false
      alert('Email es obligatorio y debe cumplir el formato')
    }
    if ( telefono == '' || !telVal(telefono)){
      formularioValido = false
      alert('Telefono es obligatorio. No olvides añadir +569')
    }
    return formularioValido
  }

  //.VALID FORMULARIO RESERVA
  let validFormRsrv = () => {
  let nombre = document.getElementById('nombreRs').value
  let mail = document.getElementById('emailRs').value
  let telefono = document.getElementById('telefonoRs').value
  let asistentes = document.getElementById('asistentesRs').value
  let formularioValido = true

    if ( nombre == '' || !nombreVal(nombre)){
      formularioValido = false
      alert('Nombre y Apellido son obligatorios')
    }
    if ( mail == '' || !mailVal(mail)){
      formularioValido = false
      alert('Email es obligatorio')
    }
    if ( telefono == '' || !telVal(telefono)){
      formularioValido = false
      alert('Telefono es obligatorio. No olvides añadir +569')
    }
    if ( asistentes == '' || !asistVal(asistentes)){
      formularioValido = false
      alert('El número de asistentes es obligatorio')
    }
    return formularioValido
  }

  //.MENSAJES DE EXITO DE ENVÍO DE FORMULARIOS
  let exitoComu = () => {
    let nombre = document.getElementById('nombre').value
    let mail = document.getElementById('email').value
    let motivo = document.getElementById('motivo').value

    alert(`Muchas gracias ${nombre}, hemos recibido sus ${motivo} y enviaremos una respuesta a su correo ${mail}`)
  }

  let exitoRs = () => {
    let nombre = $('#nombreRs').val()
    let mail = $('#emailRs').val()
    let telefono = $('#telefonoRs').val()
    let local = $('#local').val()
    let fecha = $('#fecha').val()
    let hora = $('#hora').val()
    let asistentes = $('#asistentesRs').val()

    alert(`Muchas gracias ${nombre}, hemos recibido su reserva en local de ${local} para la fecha ${fecha} a las ${hora} para ${asistentes} persona(s). Nos estaremos comunicando a través del teléfono ${telefono} o a su correo electrónico ${mail}`)
  }
  
  $('.card').dblclick(function(){
    $('#modal').show()
    let textH5 = this.childNodes[3].querySelector('h5').innerHTML
    let textP = this.childNodes[3].childNodes[3].innerHTML
    let imgSrc = this.childNodes[1].src

    $('.ctitle-modal').text(textH5)
    $('.ctext-modal').text(textP)
    $('.cimg-modal').attr('src', imgSrc)
  })

  $('.fa-times').click(()=>{
    $('#modal').hide()
  })
})
