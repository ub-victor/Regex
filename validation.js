// Valided script here

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{10}$/
}

//Validation function

function validation(field, regex){
   console.log(regex.test(field.value));
}


inputs.forEach((input)=>{
    input.addEventListener("keyup", (e)=>{
        //console.log(e.target.attributes.name.value);
        validate(e.target, [e.target.attributes.name.value]);
    })
})