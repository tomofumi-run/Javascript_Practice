const obj = {
  first_name: 'Tomofumi',
  last_name: 'Nakagawa',
  printfullName: function(){
    console.log('hello')
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Tomofumi';
    this.last_name = 'Nakagawa';
  }

  printfullName() {
    console.log('よっしゃ！')
  }
}

const obj2 = new MyObj();

obj.printfullName()
obj2.printfullName()