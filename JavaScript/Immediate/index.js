/*
Logicla Operation

const input = prompt();

if(input ===""){
    console.log('입력값이 없습니다.')
}
else{
    console.log(input);
}

== console.log(input || '입력값이 없습니다.');
*/

/*
Destructuring

const a = obj.a;
const b = obj.b;

== const {a, b} = obj;

const a = arr[0];
const b = arr[1];

== const [a, b] = arr;
*/

/*
Spread

const a = {
    A: 'a',
    B: 'b'
}

const b = {
    A: 'a',
    B: 'b',
    C: 'c'
}

==
const b = {
    ... a,  -> 객체 자체가 들어가는 것이 아니라, 객체에 포함된 값들을 흩뿌려줌
    C:'c'
}
*/

/*
Rest

const a = {
    A: 'a',
    B: 'b',
    C: 'c'
}

const {A, ...another} = a
console.log(another)

== A는 제외하고 B, C에 해당하는 것들만 콘솔에 찍힘
*/