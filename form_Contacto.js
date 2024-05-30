// validar formulario de Contacto

const validarFormuContacto = (e) => {
    e.preventDefault()
    const nombreApellido = document.getElementById('nombreapellido')
    const errorNombreApellido = document.querySelector('#error_nombre')
    errorNombreApellido.innerHTML = ""

    if (nombreApellido.value === "") {
     
        errorNombreApellido.insertAdjacentText('afterbegin', 
        'Este campo no debe estar vacio!!')
    }

    const correoElectronico = document.getElementById('correoelectronico')
    const errorEmail = document.querySelector('#error_email')
    errorEmail.innerHTML = ""

    if (!correoElectronico.value.includes('@')) {
        
        errorEmail.insertAdjacentText('afterbegin', 
        'El Email debe contener una @ !!')
    }

    const telefono = document.getElementById('telefono')
    const errorTelefono = document.querySelector('#error_telefono')
    errorTelefono.innerHTML = ""

    if (telefono.value.length < 11 || telefono.value.length > 11 ) {
        
        errorTelefono.insertAdjacentText('afterbegin', 
        'El Teléfono debe contener once (11) digitos numéricos !!')
    }
}

// agrego el llamado del submit enviar formulario

const formularioContacto = document.querySelector('#formuContacto');
formularioContacto.addEventListener('submit', validarFormuContacto);
