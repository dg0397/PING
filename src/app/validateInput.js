//this function checks the email with regular expressions
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//This function is called when the input is out of focus.
export function alertInput(){
    const alertDiv = document.querySelector('.alert');

    if(this.value.length === 0){
        
        alertDiv.textContent = "Whoops! It looks like you forgot to add your email"; // write the message in the div
        alertDiv.classList.add('alert'); //add the alert class to the div
        alertDiv.setAttribute("role", "alert");

        this.classList.add('input-alert'); //add the input-alert class to the input
    
    }else if(this.name === 'email' && !validateEmail(this.value)){
        
        alertDiv.textContent = 'Please provide a valid email address'; //check the email and write a message if email is wrong
        alertDiv.classList.add('alert'); //add the alert class to the div
        alertDiv.setAttribute("role", "alert");
    
    }else{
    
        alertDiv.textContent = ''; // remove the message in the div
        this.classList.remove('input-alert'); // remove the input-alert class
        alertDiv.removeAttribute("role", "alert");
    }
}

//this functions checks the input
export function checkInputs(){
   
    const input = document.querySelector('input');
    const alertDiv = document.querySelector('.alert');

        
    if(input.value.length === 0){
        
        alertDiv.textContent = "Whoops! It looks like you forgot to add your email";// write the message in the div
        alertDiv.classList.add('alert');//add the alert class to the div
        alertDiv.setAttribute("role", "alert");

        input.classList.add('input-alert');//add the input-alert class to the input

    }


}

export function changeColorText(){
    
    this.style.color = "#1c1c1c"
    
}