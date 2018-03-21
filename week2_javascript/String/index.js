/** 2.String & Number */
/**
 * 1.一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首
 * 範例： ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。
 */
const sameTitle = (testArray) => {
  if (testArray === null || testArray.length === 0 || testArray.length < 3) return 'data error';
  const check = testArray.find(a => typeof a !== 'string');
  if (check) return 'data error';
  let same = testArray[0];
  testArray.forEach((tar) => {
    Array.from(same).forEach((b, index2) => {
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
  if (typeof parameter !== 'string' || parameter === '') return 'data error';
  const reverseResult = Array.from(String(parameter)).reverse().join('');
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

const prepareString = (s, t) => {
  if (typeof s !== 'string' || typeof t !== 'string') return 'data error';
  if (s.length !== t.length) return false;
  s = Array.from(s).sort().join('');
  t = Array.from(t).sort().join('');
  return s === t;
};

const s = 'anagram';
const t = 'nagaram';
const result3 = prepareString(s, t);
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
  if (typeof data !== 'string' || data === '') return 'data error';
  let vowels = [];
  Array.from(data).forEach((a) => {
    if ((/[aeiou]/i).test(a)) {
      vowels = [...vowels, a];
    }
  });
  const sAry = Array.from(data);
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

const transformdecimal = (data) => {
  const mdecimal = Array.from(data);
  if (mdecimal.length > 8) return 'data error';
  let total = [];
  let result = '';
  mdecimal.reverse().forEach((a, index) => {
    const reducer = (acc, current) => parseInt(acc, 10) + parseInt(current, 10);
    if (a === '1') {
      const number = 2 ** index;
      const sum = String(number);
      total = [...total, sum];
      result = total.reduce(reducer, 0);
      // total += number;
    }
  });
  return result;
};

const str5 = '00001010';
const result5 = transformdecimal(str5);
console.log('result5', result5);

// /**
//  * 6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。
//  * 範例：
//  * 輸入：65 輸出：'01000001'
//  */

const transformBinaryFun = (data) => {
  if (typeof data !== 'number') return 'data error';
  let dividend = data;
  let divisor = 2;
  let remainder = null;
  let binaryArr = [];
  while (divisor !== 0) {
    remainder = dividend % 2;
    divisor = parseInt(dividend / 2, 10);
    dividend = divisor;
    binaryArr = [...binaryArr, remainder];
  }
  return binaryArr.reverse().join('');
};

const transformBinary = (data) => {
  let total = '';
  const zero = '0';
  let transform = transformBinaryFun(data);
  while (transform.length <= 7) {
    total = zero + transform;
    transform = total;
  }
  return transform;
};

const str6 = 10;
const result6 = transformBinary(str6);
console.log('result6', result6);

// /**
//  * 7. 將一個數字每個位數相加，直到剩個位數為止。
//  * 範例：
//  * num = 38，則 3+8 = 11，1+1 = 2, 2是個位數，回傳2。
//  */

const addDigit = (num) => {
  if (typeof num !== 'number') return 'data error';
  const result = Array.from(String(num));
  const parseValue = parseInt(result, 10);
  if (result.length > 1) {
    const reducer = (acc, current) => parseInt(acc, 10) + parseInt(current, 10);
    const getResult = Array.from(String(num));
    const secValue = getResult.reduce(reducer, 0);
    return addDigit(secValue);
  }
  return parseValue;
};
const num = 12358;
const result7 = addDigit(num);
console.log('result7:', result7);


const addDigitW = (data) => {
  let total;
  while (data >= 10) {
    const dataArray = Array.from(String(data));
    const reducer = (acc, current) => parseInt(acc, 10) + parseInt(current, 10);
    total = dataArray.reduce(reducer);
    data = total;
  }
  return data;
};

const nums = 12358;
const result7W = addDigitW(nums);
console.log('result7_While:', result7W);


// /**
//  * 8. 反轉一個int整數。
//  * 範例：
//  * x = 123 , return 321 x = -123 , return -321
//  */

const reverseInt = (data) => {
  if (typeof data !== 'number') return 'data error';
  const Num = String(data);
  const Str = Array.from(Num).reverse().join('');
  let result = parseInt(Str, 10);
  if (data < 0) {
    result *= -1;
  }
  return result;
};

const num8 = -123;
const result8 = reverseInt(num8);
console.log('result8:', result8);


module.exports = {
  sameTitle,
  reverseParameter,
  prepareString,
  reverseDigits,
  transformdecimal,
  transformBinary,
  addDigit,
  reverseInt,
};
