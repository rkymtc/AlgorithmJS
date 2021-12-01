// [Problem]
// s, birkaç parantezden oluşan bir String argümanıdır. s geçerli bir ifade olsun veya 
// olmasın lütfen doğru/yanlış döndürün.
// 6 tür vardır: '(', ')', '[', ']', '{', '}'. Aşağıdaki durumlarda geçerlidir.
// Parantezlere başladığınızda, aynı parantezlerle bitirmelisiniz. 
// Parantezlerin sırası doğru olmalıdır.
// Örneğin:

// s = "()"
// true döndür

// s = "()[]{}"
// true döndür


function isValid(s) {
  const sArr = s.split('');
  const newArr = [];

  for (i of sArr) {
    if (i === '(' || i === '[' || i === '{') {
      newArr.push(i);
    } else if (i === ')') {
      if (newArr[newArr.length - 1] === '(') {
        newArr.pop();
      } else {
        newArr.push(')');
      }
    } else if (i === ']') {
      console.log(newArr.length - 1);
      if (newArr[newArr.length - 1] === '[') {
        newArr.pop();
      } else {
        newArr.push(']');
      }
    } else if (i === '}') {
      if (newArr[newArr.length - 1] === '{') {
        newArr.pop();
      } else {
        newArr.push('}');
      }
    }
  }
  return newArr.length !== 0 ? false : true;
}

const s = '()[]{}';
console.log(isValid(s));
