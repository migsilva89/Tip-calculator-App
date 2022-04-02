

function btnPressed(tipValue) {
    document.getElementById("selected-tip").value = tipValue
    // console.log(selectedTip)
    calcula()
}

function calcula() {
    const billValue = document.getElementById("billvalue").value
    const customValue = document.getElementById("custom").value
    let tipValue = document.getElementById("selected-tip").value
    let numerOfPeople = document.getElementById("peoplenumber").value
    
    if (customValue > 0){
        tipValue = customValue
    } 

    const selectedTipValue = tipValue
    let totalTip = (billValue * selectedTipValue) / 100
    let tipPerPerson = totalTip / numerOfPeople
    let billPerPerson = billValue / numerOfPeople
    let totaPerPerson = billPerPerson + tipPerPerson

    result1 = document.getElementById("tip-per-person")
    result2 = document.getElementById("total-per-person")

    result1.innerText = `$ ${tipPerPerson}`
    result2.innerText = `$ ${totaPerPerson}`
}
