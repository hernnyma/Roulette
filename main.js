//global variables
let perBet = 100
let playerAmt = 1000
let betStorage = []
let payoutTotal = 0
let winNum = 0
let count = 0
let timedAnim
let reset = true
let toRefund = 0

class SingleNumber {
    constructor(num, sideBetNum, inBetweenNum, crossNum, columnNum, midSectionNum,leftSection, rightSection,leftHalf,rightHalf,even,odd,red,black, betAmt) {
        this.num = num
        this.sideBetNum =sideBetNum
        this.inBetweenNum = inBetweenNum
        this.crossNum = crossNum
        this.columnNum = columnNum
        this.midSectionNum = midSectionNum
        this.leftSection = leftSection
        this.rightSection = rightSection
        this.leftHalf = leftHalf
        this.rightHalf = rightHalf
        this.even = even
        this.odd = odd
        this.red = red
        this.black = black
        this.betAmt = betAmt
        this.toStorage()
    }

    toStorage() {
        let intoArr = this
        betStorage.push(intoArr)
    }

}
//Method to calculate
class CalculatePayout {
    constructor(winModifier, betAmt) {
        this.winModifier = winModifier
        this.betAmt = betAmt
        this.num()
        this.inBetweenNum()
        this.crossNum()
        this.sideBetNum()
        this.columnNum()
        this.midSectionNum()
        this.leftSection()
        this.rightSection()
        this.leftHalf()
        this.rightHalf()
        this.even()
        this.odd()
        this.red()
        this.black()
        this.showPayout()
    }
    //ODDS * betAmt adds if undefined then = 0
    num() {
        if (this.winModifier == "num") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 18*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    inBetweenNum() {
        if (this.winModifier == "inBetweenNum") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 9*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    crossNum() {
        if (this.winModifier == "crossNum") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 4.5*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    sideBetNum() {
        if (this.winModifier == "sideBetNum") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 6*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    columnNum() {
        if (this.winModifier == "columnNum") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 3*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    midSectionNum() {
        if (this.winModifier == "midSectionNum") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 3*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    leftSection() {
        if (this.winModifier == "leftSection") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 3*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    rightSection() {
        if (this.winModifier == "rightSection") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 3*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    leftHalf() {
        if (this.winModifier == "leftHalf") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 2*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    rightHalf() {
        if (this.winModifier == "rightHalf") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 2*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    even() {
        if (this.winModifier == "even") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 2*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    odd() {
        if (this.winModifier == "odd") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 2*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    red() {
        if (this.winModifier == "red") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 2.5*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    black() {
        if (this.winModifier == "black") {
            if(this.betAmt == undefined) {
                this.betAmt = 0
            }
            let total = 2.5*(this.betAmt)
            payoutTotal += total
            return payoutTotal
        }
    }
    showPayout() {
        payoutEl.textContent = payoutTotal
        reset = false
    }
    
}
//resets array, and  payout to zero. resets global variables
function clearAll() {
    playerAmt += (toRefund*perBet)
    toRefund = 0
    playerAmt += (payoutTotal)
    playerEl.textContent = (playerAmt)
    let clearStored = []
    betStorage = clearStored
    let resetTotal = 0
    payoutTotal = resetTotal
    payoutEl.textContent = 0
    showBetsEl.textContent = ""
    count = 0
    reset = true
    clearInterval(timedAnim)
    return betStorage,payoutTotal
}
//picks a number out of 18, displays winning num
function pickNum() {
    winNum = Math.floor((Math.random() * 18) + 1);
    renderRoulette()
}


function checkWin() {
    console.log(winNum)
    pickNum()
    elimDupe(betStorage)
    //iterate over each placed bet
    betStorage.forEach(function(eachObj) {
        let checkedWinNum
        let valueOfBet
        for( [modifiers, winValue] of Object.entries(eachObj)) {
            if(winValue == winNum) {
                checkedWinNum = modifiers
                for( [key,value] of Object.entries(eachObj)) {
                    if (key == "betAmt") {
                        valueOfBet = value
                    }
                }
            }
        }
        //debugging 
        console.log(`The winning mode is ${checkedWinNum} and amount bet on is ${valueOfBet}`)
        let winPayout = new CalculatePayout(checkedWinNum, valueOfBet)
        return winPayout
    })
}
// splits elements with more than one number into seperate new objects
function elimDupe (obj) {
    betStorage.forEach(function(checkDupe) {
        let tempbet
        let tempNum
        //adds bet amt to end of property
        for( [keyBet, valueBet] of Object.entries(checkDupe)) {
            if(keyBet == "betAmt") {
                console.log(keyBet, valueBet)
                tempbet = valueBet
            }
        }

        for( [key, value] of Object.entries(checkDupe)) {
            if(value.length > 1 & key !== "betAmt") {
                let splitStr = value.split("-")
                //split each array of value into two string
                splitStr.forEach(function(toValue) {
                    tempNum = toValue
                    if(key == "inBetweenNum") {
                        class inBetweenNum {
                            constructor(value, bet) {
                                this.inBetweenNum = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new inBetweenNum(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)

                    } else if (key == "crossNum") {
                        class crossNum {
                            constructor(value, bet) {
                                this.crossNum = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new crossNum(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)

                    } else if (key == "sideBetNum") {
                        class sideBetNum {
                            constructor(value, bet) {
                                this.sideBetNum = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new sideBetNum(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "columnNum") {
                        class columnNum {
                            constructor(value, bet) {
                                this.columnNum = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new columnNum(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "midSectionNum") {
                        class midSectionNum {
                            constructor(value, bet) {
                                this.midSectionNum = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new midSectionNum(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "leftSection") {
                        class leftSection {
                            constructor(value, bet) {
                                this.leftSection = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new leftSection(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "rightSection") {
                        class rightSection {
                            constructor(value, bet) {
                                this.rightSection = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new rightSection(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "leftHalf") {
                        class leftHalf {
                            constructor(value, bet) {
                                this.leftHalf = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new leftHalf(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "rightHalf") {
                        class rightHalf {
                            constructor(value, bet) {
                                this.leftHalf = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new rightHalf(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "even") {
                        class even {
                            constructor(value, bet) {
                                this.even = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new even(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "odd") {
                        class odd {
                            constructor(value, bet) {
                                this.odd = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new odd(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "red") {
                        class red {
                            constructor(value, bet) {
                                this.red = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new red(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    } else if (key == "black") {
                        class black {
                            constructor(value, bet) {
                                this.black = value
                                this.betAmt = bet
                            }
                
                        }
                        let toAddProperty = new black(tempNum, tempbet)
                        console.log(toAddProperty)
                        betStorage.push(toAddProperty)
                    }
                    
                })
            }
        }
        
    })
}
//changes the value of the bet 
function changeBet(buttonBet) {
    let betAmt = buttonBet.target
    perBet = betAmt.textContent
}

//deducts amount betted from player amount per click, also if not enough then no action -- add lose condition later
function betCost(chip) {
    toRefund++
    if(playerAmt <= 0) {
        gameOver()
    } else if (playerAmt < 99){
        playerAmt = 0
        playerEl.textContent = 0
        checkWin()
        clearAll()
    } else {
        playerAmt -= perBet
        playerEl.textContent = playerAmt
        
    }
}
//records all bets placed during the turn in a list
function showBets(clicked) {
    let newBetEl = showBetsEl.appendChild(document.createElement('li'))
    newBetEl.textContent = clicked.textContent
}

function renderRoulette() {
    //function to cycle through numbers
    timedAnim = setInterval(renderNum, 100)

}
//animates up to 18 then shows winNum
function renderNum(){
    rouletteEl
    rouletteEl.textContent = count
    count++
    console.log(count)
    if( count === 19) {
        clearInterval(timedAnim)
        rouletteEl.textContent = winNum
        
    }
}
//makes sure its reset
function checkClearBoard() {
    if (reset === true) {
        toRefund = 0
        checkWin()
    } else if (reset === false) {
        clearAll()
    }
}

function cheat() {
    playerAmt = 100000
    playerEl.textContent = playerAmt
}

function gameOver() {
    mainEl.style.display = "none"
    gameOverEl.style.display = "grid"
}

let boardEl = document.querySelector(".gameboard")
let startEl = document.querySelector(".startButton")
let resetEl = document.querySelector(".resetButton")
let playerEl = document.querySelector(".playerTotal")
let payoutEl = document.querySelector(".payout")
let twoBetButtonEl = document.getElementById("twoButton")
let fiveBetButtonEl = document.getElementById("fiveButton")
let tenBetButtonEl = document.getElementById("tenButton")
let cheatButtonEl = document.getElementById('cheat')
let winningNumEl = document.getElementById('winningNum')
let showBetsEl = document.querySelector(".showBets")
let rouletteEl = document.querySelector(".roulette")
let mainEl = document.querySelector(".main")
let gameOverEl = document.querySelector(".gameOver")

startEl.addEventListener('click', checkClearBoard)
resetEl.addEventListener('click', clearAll)
boardEl.addEventListener('click', bet)
twoBetButtonEl.addEventListener('click', changeBet)
fiveBetButtonEl.addEventListener('click', changeBet)
tenBetButtonEl.addEventListener('click', changeBet)
cheatButtonEl.addEventListener('click', cheat)

payoutEl.textContent = payoutTotal

function bet(evt) {
    let clicked = evt.target
    showBets(clicked)
    betCost(clicked)
    console.log(clicked)
    //num, sideBetNum, inBetweenNum, crossNum, columnNum, midSectionNum,leftSection, rightSection,leftHalf,rightHalf,even,odd,red,black, betAmt - class list order
    if  (clicked.getAttribute('class') == "inBetween") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,grabId,0,0,0,0,0,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "crossSection") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,grabId,0,0,0,0,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "sideBet") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,grabId,0,0,0,0,0,0,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "columnNum") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,grabId,0,0,0,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "midSection") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,grabId,0,0,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "leftSection") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,grabId,0,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "rightSection") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,grabId,0,0,0,0,0,0,perBet)
        return newBet
    } else if (clicked.getAttribute('class') == "leftHalf") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,0,grabId,0,0,0,0,0,perBet)
        return newBet 
    } else if (clicked.getAttribute('class') == "rightHalf") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,0,0,grabId,0,0,0,0,perBet)
        return newBet  
    } else if (clicked.getAttribute('class') == "even") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,0,0,0,grabId,0,0,0,perBet)
        return newBet 
    } else if (clicked.getAttribute('class') == "odd") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,0,0,0,0,grabId,0,0,perBet)
        return newBet 
    } else if (clicked.getAttribute('class') == "red") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,0,0,0,0,0,grabId,0,perBet)
        return newBet 
    } else if (clicked.getAttribute('class') == "black") {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(0,0,0,0,0,0,0,0,0,0,0,0,0,grabId,perBet)
        return newBet 
    } else {
        let grabId = clicked.getAttribute('id').replace("A", "")
        let newBet = new SingleNumber(grabId,0,0,0,0,0,0,0,0,0,0,0,0,0,perBet)
        return newBet
    }
    
    
}