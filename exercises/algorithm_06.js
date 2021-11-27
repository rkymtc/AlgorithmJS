/* [Problem] 
Verilen 7 doğal sayı, tüm tek doğal sayıları seçen, toplamını bulan ve tek sayıların en küçüğünü bulan bir program yazın.

Örneğin, (12, 77, 38, 41, 53, 92, 85) 
aralarındaki tek sayıları seçip --> 77, 41, 53, 85
toplamı --> 77 + 41 + 53 + 85 = 256,
tek sayıların en küçüğü --> 41 < 53 < 77 < 85
*/

// ▣ Girdi Örneği 1
// 12 77 38 41 53 92 85
// ▣ Çıktı Örneği 1
// 256
// 41


// İlk olarak, tek değerlerin toplamını ve minimumunu bulmamız gerekiyor, 
// bu yüzden sum ve min değişkenlerini belirledik.
// Ve tek sayıları bulmak için for... of döngüsünü ve % operatörünü kullanarak
// tek sayıysa değeri toplam değişkenine ekleyip,


function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 100;
  for (let x of arr) {
    if (x % 2 === 1) { // tek değerleri bulmak için
      sum += x;
      if (x < min) 
      {min = x;}
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
