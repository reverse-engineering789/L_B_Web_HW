const inputSlider = document.querySelector("[data-legthSlider");
const lengthDisplay = docuuent.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("[uppercase]");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();



// set password length:
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function getRandIndicator(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function generateRandomNumber(){
    return getRandInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRandInteger(97,123))
}
function generateUpperCase(){
    return String.fromCharCode(getRandIndicator(65, 91))
}
function generateSymbol(){
    const randNum = getTandInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked){
        hasUpper = true;
    }
    if(lowercaseCheck.checked){
        hasLower = true;
    }
    if(numbersCheck.checked){
        hasNum = true;
    }
    if(symbolsCheck.checked){
        hasSym = true;
    }

    if(hasUpper && jhasLowr && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }
}


async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }
    // to make copy wala span visible 
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}


function shufflePassword(array){
    // Fisher Yates Method

    if(uppercaseCheck.checked)
    funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
    funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
       funcArr.push(generateSymbol);

    // compulsory addition
    for(let i=0; i < funcArr.length; i++){
        password += funcArr[i]();
    }
    console.log("compulsory addition done");


    // remaining addition 

    for(let i = 0; i < passwordLength-funcArr.legth; i++){
        let randIndex = getRandInteger(0, fucArr.length);
        console.log("randIndex" + ramdOmdex);
        password += funcArr[randIndex]();
    }
    
}