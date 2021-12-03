let tableId = []
let buttonId = []
let tableIdFixed = []
let buttonIdFixed = []
let idOfRightButtons = []
let idOfLeftButtons = []
let idOfDownButtons = []
let idOfUpperButtons = []






let table = document.querySelector('table')     // creating a table
for (let i = 0; i < 9; i++) {
    let tr = document.createElement('tr'); // creating rows for the table

    for (let j = 0; j < 9; j++) {
        let td = document.createElement('td'); // and cells
        tr.appendChild(td);
        td.style.border = '1px solid black'
        td.innerHTML = ''
        td.style.width = '55px'
        td.style.height = '55px'

        let btn = document.createElement('button') // for each cell was created a button
        document.body.appendChild(btn)
        btn.style.width = '60px'
        btn.style.height = '60px'
        btn.style.marginLeft = '-4.5em'

        let iToString = i.toString() //giving an id to each button
        let jToString = j.toString()
        let BtnStrId = iToString + jToString
        btn.id = BtnStrId
        buttonId.push(btn.id)
        let col = document.getElementById(btn.id)
        col.style.background = "grey"

        let tdId = iToString + jToString + 'td' // giving an id to each element of the row
        td.id = tdId
        tableId.push(td.id)
        tr.appendChild(btn)


    }
    table.appendChild(tr);
}







let innerNumbers = buttonIdFixed                                                   // deleting id of edges
let numbersOnTheEdges = [...idOfUpperButtons,...idOfLeftButtons,...idOfDownButtons,...idOfRightButtons]
for (let i =0;i<innerNumbers.length;i++){
    for (let j = 0;j<numbersOnTheEdges.length;j++){
        if (innerNumbers[i]===numbersOnTheEdges[j]){
            innerNumbers.splice(i,1)
        }
    }

}
for (let i =0;i<innerNumbers.length;i++){               // id of left edges hasn't been deleted
    for (let j = 0;j<idOfLeftButtons.length;j++){
        if (innerNumbers[i]===idOfLeftButtons[j]){
            innerNumbers.splice(i,1)
        }
    }

}
for(let i = 0;i<10;i++){
for (let j = 0;j<10;j++){
    let iToString = i.toString()
    let jToString = j.toString()
    if (iToString+jToString>'80td') break;
    tableIdFixed.push(iToString+jToString+'td')   // some of the id's were missing, so new fixed arrays are created
    buttonIdFixed.push(iToString+jToString)
}
}
for (let i=0;i<81;i++){
    let elementOfRow = document.getElementById(tableId[i])     //replacing old id's with the new ones
    elementOfRow.id = tableIdFixed[i]
}
for (let i=0;i<81;i++){
    let button = document.getElementById(buttonId[i])  // same here
    button.id = buttonIdFixed[i]
}
let randomNum = []
let randomMinesTemp = []
let mines = []
let minesForStopwatch = []
for (let i = 0;i<81;i++){ //creating array with 81 digit
    randomNum.push(i)
}
for (randomNum, i = randomNum.length; i--; ) {
    let random = randomNum.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    randomMinesTemp.push(random) // making a new array with digits from previous array but in random order
}
console.log(randomMinesTemp)
for (let i = 0;i<10;i++){ // picking first 10 digits to place the mines
    let rand = randomMinesTemp[randomMinesTemp.length-1-i]
    minesForStopwatch.push(rand) // will be used later on to stop the timer if button with mine is pressed
    for (let j=0;j<10;j++){
        if (rand===j){
            rand = '0' + rand     // if a number is from 0 to 9 adding 0 to the beginning because id's are like 00,01,02 etc.
        }
    }
    mines.push(rand+'td')

}
for (let i = 0;i<81;i++){     // counting the mines to show it on the table cell
    let minesCounter = 0
    for (let j = 0;j<10;j++){
        if(tableIdFixed[i+1]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i+10]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i+9]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i+8]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i-1]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i-10]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i-9]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i-8]===mines[j]){
            minesCounter++
        }
        else if (tableIdFixed[i]===mines[j]){
            let mineDraw = document.getElementById(tableIdFixed[i])
            mineDraw.style.background = "url('mine.png')"
        }
    }

    minesCounter = minesCounter.toString()
    let drawCounter = document.getElementById(tableIdFixed[i])
    drawCounter.innerHTML = minesCounter
    drawCounter.style.textAlign = "center"
    if (minesCounter==='1'){        // adding color to each number
        drawCounter.style.color = "blue"
    }
    else if (minesCounter==='2'){
        drawCounter.style.color = 'green'
    }
    else if (minesCounter==='3') {
        drawCounter.style.color = "red"
    }
    else if (minesCounter==='4'){
        drawCounter.style.color = 'black'
    }
    else if (minesCounter==='5'){
        drawCounter.style.color = "brown"
    }
    if(minesCounter==='0'){
        drawCounter.innerHTML = ' '
    }
}
for (let i = 0;i<80;i=i+9) {   // counting mines on the left edge of the table separably, because it didn't always worked correctly
    let minesCounter = 0
    for (let j = 0; j < 10; j++) {
        if (tableIdFixed[i + 1] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i + 10] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i + 9] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i - 9] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i - 8] === mines[j]) {
            minesCounter++
        }

    }
    minesCounter = minesCounter.toString()
    let drawCounter = document.getElementById(tableIdFixed[i])
    drawCounter.innerHTML = minesCounter
    drawCounter.style.textAlign = "center"
    if (minesCounter==='1'){
        drawCounter.style.color = "blue"
    }
    else if (minesCounter==='2'){
        drawCounter.style.color = 'green'
    }
    else if (minesCounter==='3') {
        drawCounter.style.color = "red"
    }
    else if (minesCounter==='4'){
        drawCounter.style.color = 'black'
    }
    else if (minesCounter==='5'){
        drawCounter.style.color = "brown"
    }
    if(minesCounter==='0'){
        drawCounter.innerHTML = ' '
    }
}
for (let i = 8;i<80;i=i+9) { // counting mines on the right edge
    let minesCounter = 0
    for (let j = 0; j < 10; j++) {
        if (tableIdFixed[i - 1] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i - 10] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i - 9] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i + 9] === mines[j]) {
            minesCounter++
        } else if (tableIdFixed[i + 8] === mines[j]) {
            minesCounter++
        }

    }

    minesCounter = minesCounter.toString()
    let drawCounter = document.getElementById(tableIdFixed[i])
    drawCounter.innerHTML = minesCounter
    drawCounter.style.textAlign = "center"
    if (minesCounter==='1'){
        drawCounter.style.color = "blue"
    }
    else if (minesCounter==='2'){
        drawCounter.style.color = 'green'
    }
    else if (minesCounter==='3') {
        drawCounter.style.color = "red"
    }
    else if (minesCounter==='4'){
        drawCounter.style.color = 'black'
    }
    else if (minesCounter==='5'){
        drawCounter.style.color = "brown"
    }
    if(minesCounter==='0'){
        drawCounter.innerHTML = ' '
    }
}
for (let i = 0;i<10;i++){
    let minesPos = document.getElementById(mines[i])
    minesPos.innerHTML = '  '
}
for (let i = 9;i<81;i=i+9){
    idOfLeftButtons.push(buttonIdFixed[i])
}
for (let i = 8;i<80;i=i+9){
    idOfRightButtons.push(buttonIdFixed[i])
}
for (let i = 73;i<81;i++){
    idOfDownButtons.push(buttonIdFixed[i])
}
for (let i = 0;i<9;i++){
    idOfUpperButtons.push(buttonIdFixed[i])
}




let emptyTab = []
let emptyTabCopy = []
for (let i = 0;i<81;i++){
    let emptyEl = document.getElementById(tableIdFixed[i])
    if (emptyEl.innerHTML === ' '){                         // making an array with empty tabs
        emptyTab.push(tableIdFixed[i])
    }
}
emptyTabCopy = emptyTab                               // converting previous array to int
let numbers = ["00","01","02","03","04","05","06","07","08","09"]
let numbersFixed = ["0","1","2","3","4","5","6","7","8","9"]
console.log(emptyTabCopy)
for (let i =0;i<emptyTabCopy.length;i++){
    let strChange = emptyTabCopy[i]
    strChange = strChange.replace("td","")
    emptyTabCopy[i] = strChange
    for (let j=0;j<numbers.length;j++){
        if (emptyTabCopy[i]===numbers[j]){
            emptyTabCopy[i]=numbersFixed[j]
        }
    }
    emptyTabCopy[i] = Number(emptyTabCopy[i])
}
console.log(emptyTabCopy)
let array1 = []
let arrayLeft = []
let arrayRight = []
let tempArrayForSeparation = []
let tempArrayLeftSeparate = []
let tempArrayRightSeparate = []
let tempArray = []
let tabsIntWithoutEdges = []
let leftArraysDone = []
let rightArraysDone = []
let leftEdgesInt = [0,9,18,27,36,45,54,63,72]
let rightEdgesInt = [8,17,26,35,44,53,62,71,80]
for (let i = 0;i<81;i++){
    tabsIntWithoutEdges.push(i)
}
for (let i=0;i<leftEdgesInt.length;i++){
        let numberDelete = tabsIntWithoutEdges.indexOf(leftEdgesInt[i])
        tabsIntWithoutEdges.splice(numberDelete,1)
}
for (let i=0;i<rightEdgesInt.length;i++){
    let numberDelete2 = tabsIntWithoutEdges.indexOf(rightEdgesInt[i])
    tabsIntWithoutEdges.splice(numberDelete2,1)
}

while (emptyTabCopy.length !== 0){ // in order to correctly delete buttons when user is clicking on the button with an empty cell under it
    // i've decided to divide array with all empty cells(tabs) into multiple arrays

    for (let i = 0;i<emptyTabCopy.length;i++){               // creating arrays with all left and right empty tabs
        for (let j = 0;j<leftEdgesInt.length;j++){
            if (emptyTabCopy[i]===leftEdgesInt[j]){
                arrayLeft.push(leftEdgesInt[j])
            }
            else if (emptyTabCopy[i]===rightEdgesInt[j]){
                arrayRight.push(rightEdgesInt[j])
            }
        }
    }
    console.log(emptyTabCopy)
    for (let i = 0;i<leftEdgesInt.length;i++){               // deleting right and left empty tabs (different logic would be made for them)
        for (let j = 0;j<emptyTabCopy.length;j++){
            if (emptyTabCopy[j]===leftEdgesInt[i]){
                emptyTabCopy.splice(emptyTabCopy.indexOf(emptyTabCopy[j]),1)
            }
            else if (emptyTabCopy[j]===rightEdgesInt[i]){
                emptyTabCopy.splice(emptyTabCopy.indexOf(emptyTabCopy[j]),1)
            }
        }
    }
console.log(emptyTabCopy)

    array1.push(emptyTabCopy[0])
    for (let k =0;k<5;k++){                      // rechecking massive 5 times to make sure every number is correct (if not rechecked it might miss some)

        array1 = array1.filter((item, index) => {          // deleting doubles
            return array1.indexOf(item) === index
        })
        for (let i = 0;i<emptyTabCopy.length;i++){
            for (let j=0;j<array1.length;j++){
                    if (emptyTabCopy[i]===array1[j]+1 || emptyTabCopy[i]===array1[j]-9 || emptyTabCopy[i]===array1[j]-1 || emptyTabCopy[i]===array1[j]+9){
                        array1.push(emptyTabCopy[i])
                    }


            }
        }
    }

    arrayLeft = arrayLeft.filter((item, index) => {
        return arrayLeft.indexOf(item) === index
    })

    for (let i = 0;i<arrayLeft.length;i++){             // separating left empty tabs and adding them into a different array
    let limit = 9
    if (arrayLeft[i]===72){
        limit = 0
    }
    let getDocumentNext = document.getElementById(tableIdFixed[arrayLeft[i]+limit])
        tempArrayForSeparation.push(arrayLeft[i])
    if (getDocumentNext.innerHTML !== ' '){
        tempArrayLeftSeparate.push(tempArrayForSeparation)
        tempArrayForSeparation = []
    }
    else if (arrayLeft[i]===72){
        tempArrayLeftSeparate.push(tempArrayForSeparation)
        tempArrayForSeparation = []
    }





}

    let set = new Set(tempArrayLeftSeparate.map(JSON.stringify));    // deleting double arrays between two-dimensional arrays
    tempArrayLeftSeparate = Array.from(set).map(JSON.parse);



    arrayRight = arrayRight.filter((item, index) => {
        return arrayRight.indexOf(item) === index
    })
    for (let i = 0;i<arrayRight.length;i++){             // separating right empty tabs and adding them into a different array
        let limit = 9
        if (arrayRight[i]===80){
            limit = 0
        }
        let getDocumentNext = document.getElementById(tableIdFixed[arrayRight[i]+limit])
        tempArrayForSeparation.push(arrayRight[i])
        if (getDocumentNext.innerHTML !== ' '){
            tempArrayRightSeparate.push(tempArrayForSeparation)
            tempArrayForSeparation = []
        }
        else if (arrayRight[i]===80){
            tempArrayRightSeparate.push(tempArrayForSeparation)
            tempArrayForSeparation = []
        }


    }

    set = new Set(tempArrayRightSeparate.map(JSON.stringify));
    tempArrayRightSeparate = Array.from(set).map(JSON.parse);

    let arrayLeftFinal = []
    function arraySep(inArray,outArray,side) {
        while (inArray.length!==0){                // making separate arrays to open left empty tabs, so it would't open the right ones and vice versa
            arrayLeftFinal = inArray.shift()
            for (let k =0;k<10;k++){
                arrayLeftFinal = arrayLeftFinal.filter((item, index) => {
                    return arrayLeftFinal.indexOf(item) === index
                })
                for (let i = 0;i<emptyTabCopy.length;i++){
                    for (let j=0;j<arrayLeftFinal.length;j++){
                        if (side === 0){                   // different logic is needed depending on the side we are working on. Side 0 = left side
                            if (emptyTabCopy[i]===arrayLeftFinal[j]+1 || emptyTabCopy[i]===arrayLeftFinal[j]-9 || emptyTabCopy[i]===arrayLeftFinal[j]+9){   // same logic as before but without -1(so it wouldn't open right tabs)
                                arrayLeftFinal.push(emptyTabCopy[i])
                            }
                        }
                        else if (side === 1){     // side 1 = right side
                            if (emptyTabCopy[i]===arrayLeftFinal[j]-1 || emptyTabCopy[i]===arrayLeftFinal[j]-9 || emptyTabCopy[i]===arrayLeftFinal[j]+9){   // same logic as before but without -1(so it wouldn't open right tabs)
                                arrayLeftFinal.push(emptyTabCopy[i])
                            }
                        }

                    }
                }
            }
            arrayLeftFinal = arrayLeftFinal.filter((item, index) => {
                return arrayLeftFinal.indexOf(item) === index
            })
            outArray.push(arrayLeftFinal)
            arrayLeftFinal = []
        }
    }
    arraySep(tempArrayLeftSeparate,leftArraysDone,0)
    arraySep(tempArrayRightSeparate,rightArraysDone,1)

    set = new Set(leftArraysDone.map(JSON.stringify));
    leftArraysDone = Array.from(set).map(JSON.parse);
    set = new Set(rightArraysDone.map(JSON.stringify));
    rightArraysDone = Array.from(set).map(JSON.parse);

    console.log(leftArraysDone)
    console.log(rightArraysDone)






    array1 = array1.filter((item, index) => {
        return array1.indexOf(item) === index
    })
    emptyTabCopy = emptyTabCopy.filter(function(val) {   // deleting doubles for the next array
        return array1.indexOf(val) === -1
    })

    for (let i = 0;i<leftArraysDone.length;i++){         // adding our left and right arrays to the final array
        tempArray.push(leftArraysDone[i])
    }
    for (let i = 0;i<rightArraysDone.length;i++){
        tempArray.push(rightArraysDone[i])
    }
    tempArray.push(array1)
    set = new Set(tempArray.map(JSON.stringify));
    tempArray = Array.from(set).map(JSON.parse);

    array1 = []
}

for (let i = 0;i<tempArray.length;i++){                 // comparing array and searching for the same numbers because there could be arrays which supposed to be one but were separated
    for (let j = 0;j<tempArray[i].length;j++){
        for (let k = 0;k<tempArray.length;k++){
            tempArray[i] = tempArray[i].filter((item, index) => {
                return tempArray[i].indexOf(item) === index
            })
            for (let l = 0;l<tempArray[k].length;l++){
                if (i!==k){
                    if (tempArray[i][j]===tempArray[k][l]){    // if any same number is found we are combining two arrays and delete one of them
                        tempArray[i] = tempArray[i].concat(tempArray[k])
                        tempArray.splice(tempArray.indexOf(tempArray[k]),1)
                        k--        // undefined k length fix
                    }
                }
            }
        }
    }
}


for (let i = 0;i<tempArray.length;i++){                    // converting numbers in the array back to string
    let tempVar = tempArray[i]
    tempVar = tempVar.map(String)
    emptyTabCopy.push(tempVar)
}
for (let i = 0;i<emptyTabCopy.length;i++){                // changing all 0-9 to 00-09
    for (let j = 0;j<emptyTabCopy[i].length;j++){
        for (let k = 0;k<numbers.length;k++){
            if (emptyTabCopy[i][j]===numbersFixed[k]){
                emptyTabCopy[i][j]=numbers[k]
            }
        }
    }
}
console.log(emptyTabCopy)
let minesLeftCounter = 10
let flagCounter = 0
let buttonsWithMines = mines
for (let i = 0;i<buttonsWithMines.length;i++){
    buttonsWithMines[i] = buttonsWithMines[i].slice(0,-2)
}
console.log(mines)

document.addEventListener("contextmenu",function (e) {
    let target = e.target
    let targetId = target.id
    let img = "url('flag.png')"
    let indexOfPressedButton = buttonIdFixed.indexOf(targetId,0)
    let getPressedButton = document.getElementById(buttonIdFixed[indexOfPressedButton])
    let minesCounterHtml = document.getElementById('minesCounter')
    if (getPressedButton.style.opacity !== '0'){
        if (getPressedButton.style.background === "grey"){    //if you click and there is no flag image it's shows a flag
            getPressedButton.disabled = true
            getPressedButton.style.background = img
            minesLeftCounter--
            minesCounterHtml.value = minesLeftCounter
            for (let i = 0;i<buttonsWithMines.length;i++){
                if (buttonIdFixed[indexOfPressedButton]===buttonsWithMines[i]){
                    flagCounter++      // counting placed flags
                }
            }
        }
        else if (getPressedButton.style.background !== "grey" ){ // and the opposite
            getPressedButton.disabled = false
            getPressedButton.style.background = "grey"
            minesLeftCounter++
            minesCounterHtml.value = minesLeftCounter
            if (buttonIdFixed[indexOfPressedButton]===buttonsWithMines[i]){
                flagCounter--
            }

        }

        if (minesLeftCounter<0){
            minesLeftCounter++
            minesCounterHtml.value = minesLeftCounter
        }
        if (minesLeftCounter>10){
            minesLeftCounter = 10
            minesCounterHtml.value = minesLeftCounter
        }
        if (flagCounter===10){   // if all flags were placed correct all buttons are disabling and timer is stopping(win script)
            for (let i = 0;i<buttonIdFixed.length;i++){
                let disableAllButtons = document.getElementById(buttonIdFixed[i])
                disableAllButtons.disabled = true
                clearInterval(timerId)
            }

        }
    }

})
let timerIsSet = 0
let timerId = null // will be used to stop the stopwatch
let hours = 0
let minutes = 0
let seconds = 0
let timeToString = ['00','01','02','03','04','05','06','07','08','09']
function stopwatch(){
    timerId = window.setInterval(function(){
        let clock = document.getElementById("stopwatch");
        if (seconds===60){
            seconds = 0
            minutes++
        }
        if (minutes===60){
            minutes = 0
            hours++
        }
        if (hours===100){
            hours = 0
            minutes = 0
            seconds = 0
        }
        for (let i = 0;i<timeToString.length;i++){
            if (hours===i){
                hours = timeToString[i]
            }
            if (minutes===i){
                minutes = timeToString[i]
            }
            if (seconds===i){
                seconds = timeToString[i]
            }
        }

        clock.value = hours + ':' + minutes + ':' + seconds
        seconds++
    },1000);
};
document.addEventListener("click", function (e) {
    timerIsSet++ // we don't need stopwatch to start every time the button pressed, so we launch it only once
    if (timerIsSet===1){
        stopwatch()
    }
    let img = "url('flag.png')"
    let minesCounterHtml = document.getElementById('minesCounter')
    let target = e.target
    let targetId = target.id
    let indexOfPressedButton = buttonIdFixed.indexOf(targetId,0)
    let numbersAroundButton = [0,1,10,9,8,-1,-8,-9,-10]
    let numbersAroundButtonLeft = [0,1,10,9,-9,-8]
    let numbersAroundButtonRight = [0,9,8,-1,-10,-9]
    let numbersAroundButtonDown = [0,1,-1,-10,-9,-8]
    let numbersAroundButtonUp = [0,1,10,9,8,-1]
    let leftDownNumbers = [0,1,-9,-8]
    let leftUpNumbers = [0,1,9,10]
    let rightDownNumbers = [0,-1,-9,-10]
    let rightUpNumbers = [0,-1,8,9]
    let tableNumbers = ['1','2','3','4','5']
    let leftEdges = ['09','18','27','36','45','54','63']
    let rightEdges = ['17','26','35','44','53','62','71']
    let upperEdges = ['01','02','03','04','05','06','07']
    let lowerEdges = ['73','74','75','76','77','78','79']
    let corners = ['00','08','72','80']
    let buttonIdForDelete = []
    let btnWithNum = 0
    let getPressedDocument = document.getElementById(tableIdFixed[indexOfPressedButton])
    let losePicture = document.getElementById("restartBtn")

    for (let i = 0;i<minesForStopwatch.length;i++){
        if (indexOfPressedButton===minesForStopwatch[i]){   // if user pressed a btn with mine, the stopwatch is stopping, all mines are showing and buttons are disabling
            clearInterval(timerId)
            losePicture.style.backgroundImage = 'url("lose2.PNG")'
            for (let j = 0;j<minesForStopwatch.length;j++){
                let btnWithMines = document.getElementById(buttonIdFixed[minesForStopwatch[j]])
                btnWithMines.style.opacity = '0'
                for (let k = 0;k<buttonIdFixed.length;k++){
                    let disableAllButtons = document.getElementById(buttonIdFixed[k])
                    disableAllButtons.disabled = true
                }
            }

        }
    }
    for (let i = 0;i<tableNumbers.length;i++){
        let btnPressed = document.getElementById(buttonIdFixed[indexOfPressedButton])   // if a cell number is 1-5 we just open it
        if (getPressedDocument.innerHTML === tableNumbers[i]){
            btnPressed.style.opacity = '0'
            btnWithNum = 1
        }
if (getPressedDocument.innerHTML === '  '){
    btnPressed.style.opacity = '0'
    btnWithNum = 1
}
if (getPressedDocument.innerHTML === ' '){
    btnWithNum = 0
}
    }
    buttonIdForDelete = buttonIdFixed.filter(i => !leftEdges.includes(i) && !rightEdges.includes(i) && !upperEdges.includes(i) && !lowerEdges.includes(i) && !corners.includes(i))  // buttons id which not include edges

    function buttonDelete() {                   // if button what user pressed = any number of the array with empty tabs
        let buttonsForDelete = []               // we should write the array with this numbers to a new array so we could delete buttons
        for (let i = 0;i<emptyTabCopy.length;i++){
            for (let j = 0;j<emptyTabCopy[i].length;j++){
                if (buttonIdFixed[indexOfPressedButton]===emptyTabCopy[i][j]){
                    buttonsForDelete = emptyTabCopy[i]
                }
            }
        }
        for (let i = 0;i<buttonsForDelete.length;i++){
            for (let j=0;j<leftEdges.length;j++){
                for (let k=0;k<numbersAroundButtonLeft.length;k++){
                    let btnDeletedInt = Number(buttonsForDelete[i])
                    let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt])
                    btnDeleted.style.opacity = '0'
                    if (buttonsForDelete[i]===leftEdges[j]){
                        let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+numbersAroundButtonLeft[k]])
                        btnDeleted.style.opacity = '0'
                    }
                    else if (buttonsForDelete[i]===lowerEdges[j]){
                        let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+numbersAroundButtonDown[k]])
                        btnDeleted.style.opacity = '0'
                    }
                    else if (buttonsForDelete[i]===rightEdges[j]){
                        let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+numbersAroundButtonRight[k]])
                        btnDeleted.style.opacity = '0'
                    }
                    else if (buttonsForDelete[i]===upperEdges[j]){
                        let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+numbersAroundButtonUp[k]])
                        btnDeleted.style.opacity = '0'
                    }
                    else if (buttonsForDelete[i]=== '00'){
                        if (k<leftUpNumbers.length){            // k will be over arrays length
                            let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+leftUpNumbers[k]])
                            btnDeleted.style.opacity = '0'
                        }
                    }
                    else if (buttonsForDelete[i]=== '08'){
                        if (k<rightUpNumbers.length){
                            let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+rightUpNumbers[k]])
                            btnDeleted.style.opacity = '0'
                        }
                    }
                    else if (buttonsForDelete[i]=== '72'){
                        if (k<leftDownNumbers.length){
                            let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+leftDownNumbers[k]])
                            btnDeleted.style.opacity = '0'
                        }
                    }
                    else if (buttonsForDelete[i]=== '80'){
                        if (k<rightDownNumbers.length){
                            let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+rightDownNumbers[k]])
                            btnDeleted.style.opacity = '0'
                        }
                    }


                }

            }

        }
        for (let i = 0;i<buttonsForDelete.length;i++){
            for (let j = 0;j<buttonIdForDelete.length;j++){
                for (let k = 0;k<numbersAroundButton.length;k++){
                    if (buttonsForDelete[i]===buttonIdForDelete[j]){
                        let btnDeletedInt = Number(buttonsForDelete[i])
                        let btnDeleted = document.getElementById(buttonIdFixed[btnDeletedInt+numbersAroundButton[k]])
                        btnDeleted.style.opacity = '0'
                    }

                }
            }
        }

        }

    if (btnWithNum!==1){
        buttonDelete()
        for (let i = 0;i<buttonIdFixed.length;i++){
            let getButton = document.getElementById(buttonIdFixed[i])
            if (getButton.style.opacity === '0'){
                if (getButton.style.background !== 'grey'){       // if user left a flag and button disappeared cause there was no bomb the mines counter sums the count of disappeared flags
                    minesLeftCounter++
                    minesCounterHtml.value = minesLeftCounter
                }

            }

        }
    }

})

