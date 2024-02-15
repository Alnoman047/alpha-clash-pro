// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else {
        console.log('you missed. you lost a life');
    }
}
// capture keyboard button press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home');
    showElementById('playground');
    continueGame()
}