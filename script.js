const price = Array.from(document.getElementsByClassName('price'))
const toggleOn = document.getElementById('toggle-on')
const toggleOff = document.getElementById('toggle-off')

toggleOn.addEventListener('click', function(){
    price[0].innerHTML = 19;
    price[1].innerHTML = 54;
    price[2].innerHTML = 89;
})
toggleOff.addEventListener('click', function(){
    price[0].innerHTML = 12;
    price[1].innerHTML = 36;
    price[2].innerHTML = 56;
})
