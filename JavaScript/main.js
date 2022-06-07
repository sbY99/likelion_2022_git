/*
document.getElementsByClassName('animal')[0].style.color = 'blue';
document.querySelectorAll('.animal')[1].style.color = 'green';
document.querySelectorAll('.animal')[2].innerHTML = 'dog';

const animals = document.getElementById('animals');

animals.innerHTML += '<li class = "animal">cat</li>'

document.querySelectorAll('.box')[0].classList.add('purple');
document.querySelectorAll('.box')[0].classList.remove('purple');

document.querySelectorAll('.box')[0].classList.toggle('yellow');
document.querySelectorAll('.box')[0].classList.toggle('yellow');

var num =0;
document.getElementById('plus').addEventListener('click', function(){
    num++;
    document.getElementById('num').innerHTML = num;
});

document.getElementById('minus').addEventListener('click', function(){
    num--;
    document.getElementById('num').innerHTML = num;
});

document.querySelector('.bar').addEventListener('click',function(){
    document.querySelector('.bar').innerHTML = 'Clicked!';
    document.querySelector('.newBar').classList.toggle('show') = 'block';
});
*/

document.querySelectorAll('.list')[0].addEventListener('click',function(e){
    tabBtn(e.target.dataset.id);
})


function tabBtn(a){
    document.querySelectorAll('.tab-button')[a].addEventListener('click',function(){
        for(let i =0; i<document.querySelectorAll('.tab-button').length; i++){
            document.querySelectorAll('.tab-button')[i].classList.remove('here');
            document.querySelectorAll('.tab-content')[i].classList.remove('show');
        }
        document.querySelectorAll('.tab-button')[a].classList.add('here');
        document.querySelectorAll('.tab-content')[a].classList.add('show');
        
    });
}
