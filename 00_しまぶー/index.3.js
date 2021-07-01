function cut(food) {
  const cutFood = food.slice();
  return cutFood;
}

// returnで返して欲しい値をもらう

const cutCarrot = cut(carrot);
const cutPotato = cut(potato);


function throwAway(food) {
  delete food;
}

// returnが必要なければ書かない。

// Twitterの字数制限

function isTweetable(text){
  return text.length <= 140;
}

function alertTweetable(text){
  if ( isTweetable ) {
    alert("you can tweet!");
  } else {
    alert("you can't tweet...")
  }
}
