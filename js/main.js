/**
* @name main.js
* @file 
* @author Brandon Villalobos R.
* @version 2.0
*/

import { Card } from "./cards.js"

"use strict"

window.addEventListener('load', init, false);



function init() {
    let divBttn = document.createElement('div');
    divBttn.classList.toggle('startButtonContainer', true)
    document.body.appendChild(divBttn);

    let img = document.createElement('img');
    img.classList = 'imgBrain'
    img.src = './assets/brain-icon-3.png';
    divBttn.appendChild(img)

    let p = document.createElement('p');
    p.classList = 'textInst';
    divBttn.appendChild(p)
    p.innerHTML = `Instructions: <br> 1. To start the class press the "Start" button below <br> 2. There are 5 cards, each card has a word and a challenge, once you <br> put the mouse over the card it will show you the challenge <br> you need to resolve using the word that was on the front`

    let button = document.createElement('button');
    button.classList.toggle('startButton', true)
    divBttn.appendChild(button);
    button.textContent = 'Start class';

    button.addEventListener('click', () => start(button, divBttn), false);
};


function start(button, divBttn) {
    divBttn.style.display = 'none';
    button.style.display = 'none';
    var card1 = new Card('CHANGE', 1, 1);
    var card2 = new Card('ADAPT', 2, 2);
    var card3 = new Card('IMPROVISE', 3, 3);
    var card4 = new Card('MIX', 4, 4);
    var card5 = new Card('INVENT', 5, 5);
}