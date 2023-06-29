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
    if(inputs[2].value.length >= 50){
        alert("el asunto debe contener máximo 50 caracteres")
    }
    if(inputs[3].value.length >= 300){
        alert("el mensaje debe contener máximo 300 caracteres")
    }
    
})
