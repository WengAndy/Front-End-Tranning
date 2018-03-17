/** 2.String & Number */
/**
 * 1.一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首
 * 範例： ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。
 */
const sameTitle = (testArray) => {
  if (testArray == null || testArray.length === 0) return '';
  let same = testArray[0];
  testArray.forEach((tar) => {
    same.split('').forEach((b, index2) => {
      if (b !== tar.charAt(index2)) {
        same = same.slice(0, index2);
      }
    });
  });
  return same;
};

const testArray = ['abcd', 'abccc', 'abdec'];
const result1 = sameTitle(testArray);
console.log('result1:', result1);

/**
 * 2.將一個字串反轉後回傳
 * 範例： s= "hello", return "olleh"
 */

const reverseParameter = (parameter) => {
  const reverseResult = parameter.split('').reverse().join('');
  return reverseResult;
};

const parameter = 'hello';
const result2 = reverseParameter(parameter);
console.log('result2:', result2);


// /**
//  * 3. 給兩個字串s與t，回傳t是否為s的重組字
//  * 範例：
//  * s = "anagram", t = "nagaram" 回傳true
//  * s = "rat", t = "car" 回傳false
//  */

const prepareString = () => {
  let s = 'anagram';
  let t = 'nagaram';
  let result;
  if (s.length !== t.length) return false;

  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  if (s === t) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const result3 = prepareString();
console.log('result3:', result3);


// /**
//  * 4. 給一個英文字串，將裡面的母音字母反轉。
//  * 範例1:
//  * Given s = "hello", return "holle".
//  * 範例2:
//  * Given s = "leetcode", return "leotcede".
//  * 注意： y不算在母音字母中。
//  */

const reverseDigits = (data) => {
  const s = 'hello'; //return "holle"
  let vowels = [];
  // const s = 'leetcode';// , return "leotcede".
  data.split('').forEach((a) => {
    if ((/[aeiou]/i).test(a)) {
      vowels = [...vowels, a];
    }
  });
  const sAry = s.split('');
  let v = vowels.length - 1;
  sAry.forEach((a, index) => {
    if ((/[aeiou]/i).test(sAry[index])) {
      sAry[index] = vowels[v--];
    }
  });
  return sAry.join('');
};

const str4 = 'hello';// 'leetcode';
const result4 = reverseDigits(str4);
console.log('result4:', result4);


// /**
//  * 5. 給二進制字串，將其換算成對應的十進制數字，需自己寫function
//  * 範例：
//  * 輸入：'11000000' 輸出：192
//  */



// /**
//  * 6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。
//  * 範例：
//  * 輸入：65 輸出：'01000001'
//  */


// /**
//  * 7. 將一個數字每個位數相加，直到剩個位數為止。
//  * 範例：
//  * num = 38，則 3+8 = 11，1+1 = 2, 2是個位數，回傳2。
//  */

const addDigit = (num) => {
  const result = String(num).split('');
  const parseValue = parseInt(result, 10);
  while (result.length > 1) {
    const reducer = (acc, current) => parseInt(acc, 10) + parseInt(current, 10);
    const value = result.reduce(reducer, 0);
    const getResult = String(value).split('');
    if (getResult.length > 1) {
      const secValue = getResult.reduce(reducer, 0);
      return secValue;
    }
    return value;
  }
  return parseValue;
};

const num = 9999;
const result7 = addDigit(num);
console.log('result7:', result7);


// /**
//  * 8. 反轉一個int整數。
//  * 範例：
//  * x = 123 , return 321 x = -123 , return -321
//  */

const reverseInt = (num) => {
  const Num = String(num);
  const Str = Array.from(Num).reverse().join('');
  let result = parseInt(Str, 10);
  if (num < 0) {
    result *= -1;
  }
  return result;
};

const num8 = -123;
const result8 = reverseInt(num8);
console.log('result8:', result8);
