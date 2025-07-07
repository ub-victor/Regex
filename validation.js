// Valided script here

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/, // Alphanumeric characters, @, _, and - are Example valid emails: user@example allowed but not special characters like !, $, %, etc. eg: password123
    slug: /^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/  // the + sign mean at least one character long but as many characters long as needed
}

//Validation function

function validate(field, regex){
   // console.log(regex.test(field.value));// Check if the field value matches the regex pattern 
   if(regex.test(field.value)){
    field.className="valid";

   }else{
    field.className="invalid";
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


// For Email Regex
/*
    - Email must be in the format of local-part@domain
    - Local-part: can contain letters, numbers, dots, hyphens, and underscores
    - Domain: must contain at least one dot
    - Example valid emails: user@example.com, user.name@example.co.uk
    (yourname)@(domain).(extension)(.again)
*/