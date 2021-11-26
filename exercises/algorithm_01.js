//  [Problem]
//  üç sayıdan en küçüğünü veren bir program yazın.

// --> Giriş Örneği 1
// 6 5 11

// --> Çıktı Örneği 1
// 5

// Bu basit bir if koşulu.
// Minimum değeri bulmak için bir değişken kullanmamız yeterlidir.

function solution(a, b, c) {
  let answer;
  a < b ? (answer = a) : (answer = b);
  c < answer ? (answer = c) : answer;
  return answer;
}

console.log(solution(6, 5, 11));
