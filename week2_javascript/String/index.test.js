
const {
  sameTitle,
  reverseParameter,
  prepareString,
  reverseDigits,
  transformdecimal,
  transformBinary,
  addDigit,
  reverseInt,
} = require('./index');

describe('1. 一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首', () => {
  it('若輸入為正確陣列，結果得字串最長的共同字首', () => {
    const parameter = ['abcd', 'abccc', 'abdec'];
    expect(sameTitle(parameter)).toBe('ab');
  });
  it('若輸入為空陣列，結果會回錯誤訊息', () => {
    const parameter = [];
    expect(sameTitle(parameter)).toBe('data error');
  });
  it('若輸入不為字串，結果會回錯誤訊息', () => {
    const parameter = ['abcd', 123, 456];
    expect(sameTitle(parameter)).toBe('data error');
  });
  it('若輸入值少一個，結果會回錯誤訊息', () => {
    const parameter = ['abcd', 'abccc'];
    expect(sameTitle(parameter)).toBe('data error');
  });
});

describe('2. 將一個字串反轉後回傳', () => {
  it('若輸入為正確字串，結果會回反轉結果', () => {
    const parameter = 'hello';
    expect(reverseParameter(parameter)).toBe('olleh');
  });
  it('若輸入為空字串，結果會回錯誤訊息', () => {
    const parameter = '';
    expect(reverseParameter(parameter)).toBe('data error');
  });
  it('若輸入不為字串，結果會回錯誤訊息', () => {
    const parameter = 0;
    expect(reverseParameter(parameter)).toBe('data error');
  });
});

describe('3. 給兩個字串s與t，回傳t是否為s的重組字', () => {
  it('若輸入為正確字串且符合重組字條件，結果會true', () => {
    const s = 'anagram';
    const t = 'nagaram';
    expect(prepareString(s, t)).toBe(true);
  });
  it('若輸入為正確字串但不符合重組字條件，結果會false', () => {
    const s = 'anagrama';
    const t = 'nagaram';
    expect(prepareString(s, t)).toBe(false);
  });
  it('若輸入不為字串，結果會回錯誤訊息', () => {
    const s = 0;
    const t = 'nagaram';
    expect(prepareString(s, t)).toBe('data error');
  });
});

describe('4. 給一個英文字串，將裡面的母音字母反轉', () => {
  it('若輸入為正確字串，結果會回該字串字母母音結果', () => {
    const parameter = 'hello';
    expect(reverseDigits(parameter)).toBe('holle');
  });
  it('若輸入為空字串，結果錯誤訊息', () => {
    const parameter = '';
    expect(reverseDigits(parameter)).toBe('data error');
  });
  it('若輸入不為字串，結果錯誤訊息', () => {
    const parameter = 0;
    expect(reverseDigits(parameter)).toBe('data error');
  });
});

describe('5. 給二進制字串，將其換算成對應的十進制數字，需自己寫function', () => {
  it('若輸入為正確字串，且符合八位數，結果會回該字串轉制結果', () => {
    const parameter = '00001010';
    expect(transformdecimal(parameter)).toBe(10);
  });
  it('若輸入為正確字串，但大於八位數，結果會回錯誤訊息', () => {
    const parameter = '000001010';
    expect(transformdecimal(parameter)).toBe('data error');
  });
});

describe('6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位', () => {
  it('若輸入為正確數字，結果會回該數字轉制結果', () => {
    const parameter = 65;
    expect(transformBinary(parameter)).toBe('01000001');
  });
  it('若輸入不為數字，結果會回錯誤訊息', () => {
    const parameter = '65';
    expect(transformBinary(parameter)).toBe('data error');
  });
});

describe('7. 將一個數字每個位數相加，直到剩個位數為止', () => {
  it('若輸入為正確數字，結果會回相加至個位數的值', () => {
    const parameter = 65;
    expect(addDigit(parameter)).toBe(2);
  });
  it('若輸入不為數字，結果會回錯誤訊息', () => {
    const parameter = '65';
    expect(addDigit(parameter)).toBe('data error');
  });
});

describe('8. 反轉一個int整數', () => {
  it('若輸入為正確正整數，結果會回反轉正整數', () => {
    const parameter = 123;
    expect(reverseInt(parameter)).toBe(321);
  });
  it('若輸入為正確帶負數正整數，結果會回反轉負的正整數', () => {
    const parameter = -123;
    expect(reverseInt(parameter)).toBe(-321);
  });
  it('若輸入為正確帶負數正整數，結果會回反轉負的正整數', () => {
    const parameter = '-123';
    expect(reverseInt(parameter)).toBe('data error');
  });
});