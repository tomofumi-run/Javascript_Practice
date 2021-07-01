// APIを叩く asynファンクションで非同期関数化 = awaitを追加する
async function callApi(){
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const users = await res.json();
  console.log(users);
}

callApi()