'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener("mouseleave", function () {
    document.querySelector('.message').style.fontSize = '20px'
})

document.querySelector('.check').addEventListener('click',
    function () {
        document.querySelector('.message').style.fontSize = '30px'
        const guess = +document.querySelector('.guess').value
        if (!guess) {
            document.querySelector('.message').textContent = 'Wrong or no number'
        }
        else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('.message').textContent = 'You win'
            document.querySelector('body').style.backgroundImage = 'linear-gradient(rgb(148, 148, 0), rgb(148, 148, 0)'
            document.querySelector('.number').style.width = '30rem'

            if (score > highScore) {
                highScore = score
                document.querySelector('.highscore').textContent = highScore
            }
        }
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too high'
                score--
                document.querySelector('.score').textContent = score
            }
            else {
                document.querySelector('.message').textContent = 'You lost'
                document.querySelector('.score').textContent = 0
            }
        }
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too low'
                score--
                document.querySelector('.score').textContent = score
            } else {
                document.querySelector('.message').textContent = 'You lost'
                document.querySelector('.score').textContent = 0
            }
        }
    })

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = '20'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundImage = 'linear-gradient(rgb(157, 0, 255), rgb(148, 148, 0)'
    document.querySelector('.number').style.width = '15rem'
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1


})

