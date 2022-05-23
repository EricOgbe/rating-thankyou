const rate = document.querySelectorAll('.rate')
const active = document.querySelector('.active')
const starRating = document.querySelector('.star-rating')
const submitButton = document.querySelector('button')
const thanks = document.querySelector('.thanks')

rate.forEach((num) => {
    num.addEventListener('click', () => {
        removeActiveClass();
        num.classList.add('active')
        
    })
})

function removeActiveClass (){
    rate.forEach((rating) => {
        rating.classList.remove('active')
    })
}

submitButton.addEventListener('click', () => {
   rate.forEach((rating) => {
       if (rating.classList.contains('active')){
           starRating.innerHTML = rating.innerHTML
           thanks.style.visibility = 'visible'
       }
   })
})

