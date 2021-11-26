/*[Problem] 
Farklı uzunluklarda A, B ve C çubuklarının uzunlukları verildiğinde, 
bu üç çubuktan bir üçgen yapabilir miyiz?
Evet ise “EVET”, değilse “HAYIR” çıkar.

▣ Girdi Örneği 1
6 7 11

▣ Çıktı Örneği 1
 EVET

▣ Girdi Örneği 1
13 33 17

▣ Çıktı Örneği 1
 HAYIR
*/

/*Bir üçgenin koşulu, yalnızca iki kenarın uzunluklarının toplamı
üç kenar arasındaki en büyük uzunluğun kenarından büyük olduğunda sağlanır (b+c>a --> evet).
Bu nedenle tüm kenar uzunluklarını bulup sonra en büyük kenardan çıkararak bulabiliriz (max-a+b+c).
(max-a+b+c > max --> evet)
*/

function solution(a, b, c) {
  let answer, max;
  let total = a + b + c;
  a > b ? (max = a) : (max = b);
  c > max ? (max = c) : max;
  total - max <= max ? (answer = 'NO') : (answer = 'YES');
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

// 2.yol
//kenar uzunlukları arasındaki ilişki ---> a + b > c > |a−b|

function solution(x, y, z) {
  let answer, total;
  total = x + y;
  var absolute = Math.abs(x - y);
  ((total > z) && (z > absolute)) ? (answer = "YES") : (answer = "NO")
  return answer;
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));