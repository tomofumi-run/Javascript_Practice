// DOM
const btn = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数（メソッド）
async function getUsers(){
    //データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}
async function listUsers(){
  const users = await getUsers();
  //DOM操作
  users.forEach(addList);
}

function addList(user){
  const list = document.createElement("li")
  list.innerText = user.name;
  lists.appendChild(list);
}


//イベント
//ロードされた時にliを追加する
window.addEventListener("load",listUsers);

//btnがクリックされたらliを追加していく
btn.addEventListener("click", listUsers);


