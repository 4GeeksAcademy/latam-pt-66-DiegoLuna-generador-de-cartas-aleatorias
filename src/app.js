import "bootstrap";
import "./style.css";

let figures = ['♦', '♥', '♠', '♣']
let numbers = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']

window.onload = function randomCard() {
  //write your code here
  let cardBack = document.querySelector('#cardbg')
  let ranFigures = figures[Math.floor(Math.random()*4)]
  let ranNumbers = numbers[Math.floor(Math.random()*13)]
  let ranFigures2 = ranFigures
  cardBack.innerHTML = ranFigures + ranNumbers + ranFigures2
};
