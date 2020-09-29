/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

function isVowel(letter){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < vowels.length; i++){
        if(vowels[i] == letter.toLowerCase()){
            return true;
        }
    }
    return false;
}

function returnSymbols(word){
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let newWord = '';
    for(let i = 0; i < word.length; i++){
        if(letters.includes(word[i].toLowerCase())){
            newWord += word[i];
        }
    }
    symbols = word.split(newWord);
    return [symbols, newWord];
}

function pigLatin(phrase){
    let words = phrase.split(' ');
    let pigLatinPhrase = [];
    for(let i = 0; i < words.length; i++){
        let isUpper = false;
        let symbolsWord = returnSymbols(words[i]);
        let word = symbolsWord[1];
        let symbols = symbolsWord[0];
        if(!word){
            break;
        }
        if(word[0].toUpperCase() == word[0]){
            isUpper = true;
        }
        let counter = 0;
        while(!isVowel(word[0])){
            counter++;
            word = word.slice(1, word.length) + word[0].toLowerCase();
            if(counter > 10){
                break;
            }
        }
        if(isUpper){
            word = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
        }
        pigLatinPhrase.push(symbols[0] + word + 'ay' + symbols[1]);
    }
    pigLatinPhrase = pigLatinPhrase.join(' ');
    return pigLatinPhrase;
}

function submit(e){
    e.preventDefault();
    let english = input.value;
    let pLatin = pigLatin(english);
    p.innerText = pLatin;
}

let form = document.getElementsByTagName('form')[0];
let input = document.getElementsByTagName('input')[0];
let p = document.getElementById('results-p');

form.addEventListener('submit', submit)