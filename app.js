function calcula() {
    billValue = document.getElementById("billvalue")
    customValue = document.getElementById("range")
    var tipValue = null

    if (customValue.value > 0){
        tipValue = customValue.value
    } else {
        var radioValues = document.getElementsByName("radio")
        for (var i = 0; i < radioValues.length; i++){
            if(radioValues[i].checked == true) {
                tipValue = radioValues[i].value
            }
        }  
    }

    numberOfPeople = document.getElementById("peoplenumber")
    var totalTip = (billValue.value * tipValue) / 100
    var tipPerPerson = totalTip / numberOfPeople.value
    var billPerPerson = billValue.value / numberOfPeople.value
    var totalPerPerson = tipPerPerson + billPerPerson
    console.log(totalPerPerson)
    console.log(tipPerPerson)
}