let pageWelcome = document.querySelector('.page-welcome')
let pageQ1 = document.querySelector('.page-q1')
let pageQ2 = document.querySelector('.page-q2')
let pageQ3 = document.querySelector('.page-q3')
let pageQ4 = document.querySelector('.page-q4')
let pageEnd = document.querySelector('.page-end')

let prevButtonprevQ1 = document.querySelector('.page-q1', '.prev')
let prevButtonQ2 = document.querySelector('.page-q2', '.prev')
let prevButtonQ3 = document.querySelector('.page-q3', '.prev')
let prevButtonQ4 = document.querySelector('.page-q4', '.prev')
let prevButtonEnd = document.querySelector('.page-end', '.prev')

let nextButtonPageWelcome = document.querySelector('.page-welcome .next')
let nextButtonPageQ1 = document.querySelector('.page-q1 .next')
let nextButtonPageQ2 = document.querySelector('.page-q2 .next')
let nextButtonPageQ3 = document.querySelector('.page-q3 .next')
let nextButtonPageQ4 = document.querySelector('.page-q4 .next')


pageWelcome.style.display = 'flex'



nextButtonPageWelcome.addEventListener('click' , function () {
    pageWelcome.style.display = 'none'
    pageQ1.style.display = 'flex'

})

nextButtonPageQ1.addEventListener('click' , function () {
    pageQ1.style.display = 'none'
    pageQ2.style.display = 'flex'

})

nextButtonPageQ2.addEventListener('click' , function () {
    pageQ2.style.display = 'none'
    pageQ3.style.display = 'flex'

})

nextButtonPageQ3.addEventListener('click' , function () {
    pageQ3.style.display = 'none'
    pageQ4.style.display = 'flex'

})

nextButtonPageQ4.addEventListener('click' , function () {
    pageQ4.style.display = 'none'
    pageEnd.style.display = 'flex'

})