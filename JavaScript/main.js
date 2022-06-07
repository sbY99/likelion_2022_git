document.getElementsByClassName('animal')[0].style.color = 'blue';
document.querySelectorAll('.animal')[1].style.color = 'green';
document.querySelectorAll('.animal')[2].innerHTML = 'dog';

const animals = document.getElementById('animals');

animals.innerHTML += '<li class = "animal">cat</li>'

document.querySelectorAll('.box')[0].classList.add('purple');
document.querySelectorAll('.box')[0].classList.remove('purple');

document.querySelectorAll('.box')[0].classList.toggle('yellow');
document.querySelectorAll('.box')[0].classList.toggle('yellow');