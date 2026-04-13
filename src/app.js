import "bootstrap";
import "./style.css";



window.onload = function randomCard() {
  //write your code here

  let figures = ['♦', '♥', '♠', '♣']
  let numbers = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']

  let ranFigures = figures[Math.floor(Math.random()*4)]
  let ranNumbers = numbers[Math.floor(Math.random()*13)]

  let cardBack = document.querySelector('#cardbg')
  cardBack.innerHTML = ''

  let topFigure = document.createElement('div')
  topFigure.textContent = ranFigures
  topFigure.classList.add('top-left')

  let centerNumber = document.createElement('div')
  centerNumber.textContent = ranNumbers
  centerNumber.classList.add('center')

  let bottomFigure = document.createElement('div')
  bottomFigure.textContent = ranFigures
  bottomFigure.classList.add('bottom-right')

  if (ranFigures === '♦' || ranFigures === '♥') {
    topFigure.classList.add('red')
    centerNumber.classList.add('red')
    bottomFigure.classList.add('red')
  }

  cardBack.appendChild(topFigure)
  cardBack.appendChild(centerNumber)
  cardBack.appendChild(bottomFigure)
};
