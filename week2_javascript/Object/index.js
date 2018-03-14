// 1. deep clone object
//   輸入物件，輸出一個深層複製的物件。兩者記憶體位置不能一樣。
  
// fix this bug, a.text should be 'aaa':

// var a = {text: 'aaa'};
// var b = a;
// b.text = 'bbb';

// console.log(a.text); // 'bbb'
const a = { text: 'aaa' };
const b = {
  ...a,
  text: 'bbb',
};

console.log('odj1', a.text);

// 2. add a format prototype to Date
//   為 Date 新增一個原型方法為 format，可以執行 new Date().format()
  
//   format: 'YYYY-MM-DD'
  
// 範例：
// 輸入：new Date().format()
// 輸出：'2018-02-25'

// 3. class constructor for Person

// 範例：
// 輸入：
// var john = new Person('john', 18);
// john.sayhi(); // "hi I'm john, 18 years old"

// var hyman = new Person('hyman', 25);
// hyman.sayhi(); // "hi I'm hyman, 25 years old"

class Person {
  constructor(name, old) {
    this.name = name;
    this.old = old;
  }
  sayhi() {
    const sayhello = `hi I'm ${this.name}, 18 years old`;
    return sayhello;
  }
}
const hyman = new Person('hyman', 25);
console.log('hyman', hyman.sayhi());
// 4. regexp replace all

// 範例：
// 輸入： 'abacadaeaf', 'a', '123'
// 輸出： '123b123c123d123e123f'

// 5. regexp condition match email format
// 範例：
// 'wistron@wistron.com' return true
// 'wistron.com' return false

const emailValid = () => {
  const testEmail = 'AndyWeng@wistron.com';
  const emailRegexp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (testEmail.match(emailRegexp)) return true;
  return false;
};
console.log('odj5', emailValid());

