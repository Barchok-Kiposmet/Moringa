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

    // const dates = [CC, YY, MM, DD]
    
    // formula for the the day of the week

    var dayOfTheWeek = Math.floor((((CC/4)-2*CC-1) + ((5*YY/4))+((26*(MM+1)/10))+DD)%7);

    
    // console.log(dayOfTheWeek)
    
    // retrieve the days of the week and the corresponding names

   const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Testing the result against the gender results

   
    // var index = dayOfTheWeek-1;
     var index;
  // fix formula bug

        if (dayOfTheWeek == 0){
         index = 6;
            } else {
             index = dayOfTheWeek - 1;
            }
    // Alerts and checks

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
        
        // let btnClear = document.querySelector('clear');
        // let inputs = document.querySelectorAll('input');

        // btnClear.addEventListener('click',() => {
        //     inputs.forEach(input = inputs.value = '')
        // });
    
    console.log(submit)

}