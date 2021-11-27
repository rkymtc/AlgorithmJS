/* [Problem] 
Girilen 9 sayıdan toplamı 100'e eşit olan 7 sayıyı bulan program.
Birden fazla doğru cevap varsa, herhangi bir sayıyı yazdırın ve sayıları girildikleri sırayla yazdırın.
*/
// ▣ Giriş Örneği 1
// 20 7 23 19 10 15 25 8 13
// ▣ Çıktı Örneği 1
// 20 7 23 19 10 8 13


// a+b+c+d+e+f+g-(h+ı) = 100
// Bu nedenle, tüm dizinin toplamını bulabilir, 
// double for döngüsü yaparak iki sayıyı bulabilir,
// if koşullu ifadeyle sayıları bulabilir ve splice yöntemini kullanarak sayıları silebilirsiniz.


function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0)// 1--> a=20 b=7 a+b=27 2--> a=27 b=23 a+b-->50 8--> a=127 b=13 a+b=140
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
    
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j,1); // Silerken dizinin elemanlarının kaybolmaması için arkadan silinmesi gerekir.
        answer.splice(i,1);

      }
    }
  }
  return answer;
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

