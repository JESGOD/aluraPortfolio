const formulario = document.querySelector(".form")
const inputs = document.querySelectorAll("[data-input-form]")


formulario.addEventListener("submit",e =>{
    e.preventDefault()
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(inputs[0].value.length >= 50){
    
        alert("el nombre debe contener máximo 50 caracteres")
    }
    if(!regexEmail.test(inputs[1].value)){
        alert("el email no es valido")
    }
})