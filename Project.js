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
    
    var CC = date.slice(0,2)
    var YY = date.slice(2,4)
    var MM = date.slice(5,7)
    var DD = date.slice(8,10)

    const dates = [CC, YY, MM, DD]
    
    // formula for the the day of the week

    var dayOfTheWeek = Math.floor((((CC/4)-2*CC-1) + ((5*YY/4))+((26*(MM+1)/10))+DD)%7);

    
    // console.log(dayOfTheWeek)
    
    // retrieve the days of the week and the corresponding names

   const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Testing the result against the gender results

   if (gender == "Male" & dayOfTheWeek == index) {
            alert ('You were born on' + daysOfTheWeek[0] + 'Your Akan Name is' + maleNames[0])
   } else {
    alert('You were born on a' + daysOfTheWeek[0] + 'You Akan Name is' + femaleNames[0])
   }

//    if (gender == "Male" & dayOfTheWeek == 1) {
//         alert ('You were born on a' + daysOfTheWeek[1] + 'Your Akan Name is' + maleNames[1])
//     } else {
//         alert('You were born on a' + daysOfTheWeek[1] + 'You Akan Name is' + femaleNames[1])
//     }
    
    console.log(submit)


}