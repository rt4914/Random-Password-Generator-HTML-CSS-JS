let passwordLength = 8;

function copyPasswordToClipboard(that){
    var element = document.getElementById(that.id)
    navigator.clipboard.writeText(element.textContent)

    alert("Copied: " + element.textContent);

}

function generatePasswords(){
    showTextHideDots()
    
    let firstPasswordElement = document.getElementById("first-password")
    let secondPasswordElement = document.getElementById("second-password")
    let thirdPasswordElement = document.getElementById("third-password")
    let fourthPasswordElement = document.getElementById("fourth-password")

    firstPasswordElement.textContent = generateRandomPassword()
    secondPasswordElement.textContent = generateRandomPassword()
    thirdPasswordElement.textContent = generateRandomPassword()
    fourthPasswordElement.textContent = generateRandomPassword()
}

function showTextHideDots(){
    let allPasswordTexts = document.getElementsByClassName("password-text")
    for (let i = 0; i < allPasswordTexts.length; i++) {
        allPasswordTexts[i].style.display = 'flex';
    }
    let allDots = document.getElementsByClassName("dot")
    for (let i = 0; i < allDots.length; i++) {
        allDots[i].style.display = 'none';
    }
}

// Approach 2: Using string as character set.
function generateRandomPassword(){
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
    
    var result = ""
    while(result.length <= passwordLength){
        var randomIndex = Math.floor(Math.random() * charSet.length);
        result+= charSet[randomIndex];
    }
    return result;
}

// Approach 1: Using arrays of characters.
// function generateRandomPassword(){
//     // List of all characters which can be part of password.
//     const charSet = [
//         'A', 'a', 'B', 'b', '0', '@'
//     ]
    
//     var result = ""
//     while(result.length <= passwordLength){
//         var randomIndex = Math.floor(Math.random() * charSet.length);
//         result+= charSet[randomIndex];
//     }
//     return result;
// }
