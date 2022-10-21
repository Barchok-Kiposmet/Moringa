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
    
    // formula for the the day of the week
    var dayOfTheWeek = (((CC/4)-2*CC-1) + ((5*YY/4))+((26*(MM+1)/10))+DD)%7

    console.log(dayOfTheWeek)

    // Pendo's approach
    
    


}