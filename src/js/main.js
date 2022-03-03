let allPages = document.querySelectorAll('.page')
let allPrevButtons = document.querySelectorAll('.prev')
let allNextButtons = document.querySelectorAll('.next')

let allJumpButtons = document.querySelectorAll('[data-jump]')
let answersA = document.querySelectorAll('.a')
let answersB = document.querySelectorAll('.b')
let answersC = document.querySelectorAll('.c')
let answersD = document.querySelectorAll('.d')


console.log('I found ' + allPages.length + ' pages!')


let jumpToPage = function(pageNumber) {
    allPages[currentPage].style.display = 'none'
    currentPage = pageNumber
    allPages[currentPage].style.display = 'block'
}


// index number of the page we are currently looking at
let currentPage = 0

allPages[0].style.display = 'block'

let nextPage = function() {
    allPages[currentPage].style.display = 'none'
    currentPage++
    allPages[currentPage].style.display = 'block'
}

allNextButtons.forEach(function (nextButton){
    console.log('got a next button', nextButton)

    nextButton.addEventListener('click', nextPage)
})

let prevPage = function() {
    allPages[currentPage].style.display = 'none'
    currentPage--
    allPages[currentPage].style.display = 'block'
}

allPrevButtons.forEach(function (prevButton){
    console.log('got a prev button', prevButton)

    prevButton.addEventListener('click', prevPage)
})

allJumpButtons.forEach(function(jumpButton){
    let pageNumber = jumpButton.getAttribute('data-jump')
    jumpButton.addEventListener('click', function(){
        jumpToPage(pageNumber)
    })
})

answersA.addEventListener('click', function (answerA){
    console.log('selected')
})
    
