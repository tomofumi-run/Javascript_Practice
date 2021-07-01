let youtuber = {
  list: {
    business: {
      youtuber: [
        { name: "しまぶー", age: 20, teachPrograming() {} },
        { name: "あっちゃん", age: 37, teachHistroy() {} }
      ],
      teach() {}
    },
    entertaiment: {
      youtuber: [{ name: "ヒカキン"}, { name: "はじめしゃちょー"}],
      makeSmile() {}
    }
  },
  plan() {},
  uploadVideo() {}
}

youtuber.list.business.youtuber[0].teachPrograming();

// ブラウザ側が用意してくれているオブジェクトやメソッドを使っている
window = {
  console: {
    log(){},
  },
  alert(){},
  document: {
    getElementById(){}
  }
}

// DOM(HTMLへのアクセス)

window.console.log();
window.alert();
window.document.getElementById()