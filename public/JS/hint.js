const showHint = document.getElementById('showHint')
const hint = document.getElementById('hint')

showHint.addEventListener('click', function(e){
    e.preventDefault()
    hint.classList.toggle('hidden')
})