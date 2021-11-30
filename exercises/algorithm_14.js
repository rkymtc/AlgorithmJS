// [Problem]
// Harf ve sayı karışık olarak girilen dizedeki sayıları çıkarma

// ▣ Girdi Örneği 1
// s1r0c0m9as1el8

// ▣ Çıktı Örneği 1
// 100918

function solution(str) {
  let result = '';
  for (let x of str) {
    if (!isNaN(x)) result += x;
  }
  return parseInt(result);
}

let str = 's1r0c0m9as1el8';
console.log(solution(str));
