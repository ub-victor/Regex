// Valided script here

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{10}$/
}

//Validation function

function validate(field, regex){
   // console.log(regex.test(field.value));// Check if the field value matches the regex pattern 
   if(regex.test(field.value)){
    field.className="valid";
    const p = document.getElementById('tel').style.color= "blue"

   }else{
    field.className="invalid"
   }
}


inputs.forEach((input)=>{
    // here the logic is to get the input field and its name attribute, then use that name to get the corresponding regex pattern from the patterns object.
    // Then we can use that regex pattern to validate the input field value.
    // The event listener is added to the input field to listen for the keyup event,
    
    input.addEventListener("keyup", (e)=>{
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]); // the e.target = field and field.value = input value
    })
})