const submit = () => {

    // retrieve elements from the form
    const fNameElement = document.getElementById("fname")
    const lNameElement = document.getElementById("lname")
    const emailElement = document.getElementById("email")
    const numberElement = document.getElementById("number")

    // console.log(submit)

    // retrieve the values

    const fname = fNameElement.value;
    const lname = lNameElement.value;
    const email = emailElement.value;
    const number = numberElement.value;
    const submit = [fname, lname, email, number];
   
      
    //do some checks on the inputs to ensure user enters all required data

    if (fname == '') {
        alert('Please enter your first name')
    } 
    if (lname == '') {
        alert('Please enter your last name')
    } 
    if (email == '') {
        alert('Please enter your email')
    } 
    if (number == ''){
        alert('Please enter your number')
    }
    
    else {
        alert('Congratulations, you are logged in. Check your email for password')
    }
     
           
    console.log(submit)
}