const userInput = document.querySelector('#user-input')
const userInputButton = document.querySelector('#user-input-button')
const totalDisplay=  document.querySelector('#Total')
const displayRolls= document.querySelector('#displayRoll')
const rolls = document.querySelector('#rolls')
let dieRollArray = []
let totalRoll = 0
userInputButton.addEventListener('click', function (){
    
    let numberOfDieToRoll = userInput.value
    for (let index=0;index<Number(numberOfDieToRoll);index+=1)  {
       let randomroll = Math.floor(Math.random()*6) +1
       dieRollArray.push(randomroll)
       totalRoll += randomroll
    }
   totalDisplay.innerHTML=totalRoll
    
 console.log(dieRollArray)   


})

displayRolls.addEventListener('click', function () {
    for (let index = 0; index < dieRollArray.length; index++) {
        let newDiv = document.createElement('div')
        const element = dieRollArray[index];
       newDiv.append(`${index+1}. ${element}\n`) 
       rolls.append(newDiv)
    }

})
