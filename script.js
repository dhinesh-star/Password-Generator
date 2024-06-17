let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*+";
let space = " ";

function randomString(character){
    let idx = Math.floor(Math.random()*character.length);
    return character[idx];
}

function finalString(){
    finalString = ''
    resultString = ''
    let lowerCaseCheckBox = document.querySelector('#lowerCase');
    let upperCaseCheckBox = document.querySelector('#upperCase');
    let numberCheckBox = document.querySelector('#number');
    let symbolCheckBox = document.querySelector('#symbol');
    let spaceCheckBox = document.querySelector('#includeSpaces');

    if(lowerCaseCheckBox.checked==false && 
       upperCaseCheckBox.checked==false && 
       numberCheckBox.checked==false && 
       symbolCheckBox.checked==false && 
       spaceCheckBox.checked==false){
        alert("Please tick the revalent checkbox to generate password");
        return ;
    }

    if(lowerCaseCheckBox.checked){
        resultString += randomString(lowercaseCharacters);
        finalString += lowercaseCharacters;
    }
    if(upperCaseCheckBox.checked){
        resultString += randomString(uppercaseCharacters);
        finalString += uppercaseCharacters;
    }
    if(numberCheckBox.checked){
        resultString += randomString(numbers);
        finalString += numbers;
    }
    if(symbolCheckBox.checked){
        resultString += randomString(specialCharacters);
        finalString += specialCharacters;
    }
    if(spaceCheckBox.checked){
        resultString += randomString(space);
        finalString += space
    }

    while(resultString.length<=12){
        resultString += randomString(finalString);
    }
    let password = document.querySelector('#password');
    password.style.color = 'white';
    password.value = resultString;
    
    let copyBtn = document.querySelector('#copy');
    copyBtn.textContent = 'Copy';
}

function copyPassword(){
    let password = document.querySelector('#password').value;
    navigator.clipboard.writeText(password);
    let copyBtn = document.querySelector('#copy');
    copyBtn.textContent = 'Copied';
}

function changeBorderStyle(){
    let inputField = document.getElementById('password');
}

let btn = document.querySelector("#generatePassword")
btn.addEventListener("click", finalString);

let copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);

let inputFieldPassword = document.getElementById('password');
inputFieldPassword.addEventListener('click', changeBorderStyle)
