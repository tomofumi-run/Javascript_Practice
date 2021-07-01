// 関数式・匿名（無名）関数

function unfollow() {
  console.log("フォローを外しました");
}

function canselTweet(){
  console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
  if (window.confirm("実行しますか")) {
    fn();
  }
}

confirmed(unfollow);



function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  if (input === "実行"){
    fn();
  }
}

confirmed(function(){
  console.log("削除しました")
});

const btn = document.getElementById("button");

btn.addEventListener('click', function(){
  console.log("フォロー解除")
});

const foods = ["にんじん","じゃがいも","玉ねぎ"];

foods.forEach(function(food){
  console.log(food);
});