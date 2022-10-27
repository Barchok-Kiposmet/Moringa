const submit = () => {

    //Retrieve elements from the form

    const dateElement = document.getElementById("date")
    const genderElement = document.getElementById("gender")

    // console.log(submit)- this checks if the code is running

    // Retrieve the value from the documents

    const date = dateElement.value;
    const gender = genderElement.value;
    const submit = [date, gender];

    // console.log(submit)

    // Retrieve the date values from the date of birth for us to run the day of the week function
    
    var CC = Number(date.slice(0,2));
    var YY = Number(date.slice(2,4));
    var MM = Number(date.slice(5,7));
    var DD = Number(date.slice(8,10));

    
    // formula for the the day of the week

    var dayOfTheWeek = Math.floor((((CC/4)-2*CC-1) + ((5*YY/4))+((26*(MM+1)/10))+DD)%7);

        
    // retrieve the days of the week and the corresponding names

   const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

       
    // var index = dayOfTheWeek-1;
    
     var index;

  // fix formula bug where there was a decimal point and failing to allign

        if (dayOfTheWeek == 0){
         index = 6;
            } else {
             index = dayOfTheWeek - 1;
            }

    // Alerts and checks for when either date or gender is left as blank

        if (date ==''){

            alert('Please enter a valid date of birth')
        }    

        if (gender == 'Null'){
            
            alert('Please select your Gender')
        }

        if (gender == "Male" & date !='') {

            document.getElementById("results").textContent = ('You were born on a' + ' ' + daysOfTheWeek[index] + '.' + ' ' + 'Your Akan Name is' + ' ' + maleNames[index])
        } 
        else if (gender == "Female" & date !='') { 

            document.getElementById("results").textContent = ('You were born on a' + ' ' + daysOfTheWeek[index] + '.' + 'Your Akan Name is' + ' ' + femaleNames[index])
        }
        else {
            alert('Kindly enter correct data.')
        }
        
        /// Clear button to clear the page to null values
        
        document.getElementById("clear").onclick = function() {
        document.getElementById("myBirthday").value = "";
        document.getElementById("gender").value = 'null';
        document.getElementById("results").textContent = "";
        }

        let btnClear = document.querySelector('button');
        let inputs = document.querySelectorAll('input');
        btnClear.addEventListener('click', () =>{
            inputs.forEach(input  => input.value = '');
        });


    
    console.log(submit)

}