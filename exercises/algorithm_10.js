/* [Problem] 
Girilen metnin içerisinde belirlediğiniz harften kaç tane olduğunu veren program?
Dizenin uzunluğu 100'ü aşamaz.
*/


// ▣ Girdi Örneği 1
// BİLGİSAYAR PROGRAMLAMA
// R
// ▣ Çıktı Örneği 1
// 3

// Sadece for of ifadesi kullanılarak alınan ikinci argümanla aynıysa, sayı toplanır ve döndürülür,

function solution(s, r) {
  let answer = 0;
  for (let x of s) {
    if (x === r) {
      answer++;
    }
  }
  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

// 2.yol
// Split yöntemi kullanılarak dahil edilen bir kelime varsa, onu kesin ve kesilen kelimenin toplam uzunluğunu döndürün.
// Bölme durumunda, sonuna eklenen bir kelime gelse bile boş bir dize döndürülür, bu nedenle son kelimeyi hariç tutmak için -1 kullanılır.

function solution(s, r) {
  let answer = s.split(r).length;
  return answer - 1; 
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
