function hello(callback, lastname){
  console.log('hello' + callback(lastname) );
}

function getName(){
  return 'Code Mafia';
}

const getFirstName = function(name) {
  return 'Code' + name;
}

hello(getName);
hello(getFirstName);

hello(getFirstName,'Mafia');


function doSomething(a,b, callback) {
  const result = callback(a,b);
  console.log(result)
}

function multiply(a,b) {
  return a * b;
}

function plus(a,b) {
  return a + b;
}

doSomething(2,2,multiply)
doSomething(2,3,plus)

// 関数は変数としても扱える