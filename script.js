
let displayPhone = document.querySelector('.display_phone'); 


let buttonOne = document.querySelector('.button_one');

buttonOne.addEventListener('click', () =>
{
displayPhone.style.backgroundImage="url('img/bb.jpg')"; 
displayPhone.style.backgroundSize="100%";
})



let buttonTwo = document.querySelector('.button_two');
buttonTwo.addEventListener('click', () =>
{
displayPhone.style.background="#627282"; 
Oneball.style = 'display:none';
})

let buttonThree = document.querySelector('.button_three');
buttonThree.addEventListener('click', () =>
{
    displayPhone.style = 'width:100%; height:45%; border-radius: 25px; background:#f8fb93'
    Oneball.style = 'none';
})


let buttonFour = document.querySelector('.button_four');
buttonFour.addEventListener('click', () =>
{
displayPhone.style = 'width:100%; height:45%; border-radius: 50%; background:#f8fb93';
Oneball.style = 'display:none';

})


let buttonFive = document.querySelector('.button_five');


buttonFive.addEventListener('click', () =>
{
displayPhone.style = 'width:100%; height:45%; border-radius: 25px; background:#DC143C';
 })


let buttonSix = document.querySelector('.button_six');
buttonSix.addEventListener('click', () =>
{
    displayPhone.style = 'width:100%; height:45%; border-radius: 25px; background:#98FB98';
})

let buttonSeven = document.querySelector('.button_seven')
buttonSeven.addEventListener('click', () =>
{
 displayPhone.style = 'width:100%; height:45%; border-radius: 25px; background:#AFEEEE';
})


let buttonEight = document.querySelector('.button_eight');
buttonEight.addEventListener('click', () =>
{
 displayPhone.style = 'width:100%; height:45%; border-radius: 25px; background:#DDA0DD';
})


let buttonNine = document.querySelector('.button_nine');
buttonNine.addEventListener('click', () =>
{
 displayPhone.style = 'width:100%; height:45%; border-radius: 25px; background:#A0522D';
})