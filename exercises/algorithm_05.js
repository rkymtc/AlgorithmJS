/*[Problem]
Verilen 7 sayının en küçüğünü yazdıran bir program yazın.

▣ Giriş Örneği 1
5 8 4 3 7 15 17
▣ Çıktı Örneği 1
3
*/


/*
maksimum tamsayı değerini belirten Number.MAX_SAFE_INTEGER kullanılarak minimum değer 
belirlenir. for döngüsü ile dizinin boyutu kadar dönüp if döngüsü ile sırasıyla tüm değerler 
karşılaştırılır ve en küçük değer min içerisine atılır.
*/
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min){
     min = arr[i];
  }
}
  return min;
}
let arr = [5, 8, 4, 3, 7, 15, 17];
console.log(solution(arr));

// 2.yol
// Math fonksiyonunun min yöntemini kullanarak, dizi genişletme operatörünü kullanarak sorunu çözebilirsiniz.
// spread(...)for döngüsü kullanmadan yazmaya izin veriyor. birden fazla elemanı toplayarak diziyi genişletir.
function solution(arr) {
  let min = Math.min(...arr); 
  return min;
}

let arr = [5, 8, 4, 3, 7, 15, 17];
console.log(solution(arr));

// ek olarak dizideki maksimum değeri bulmak için :)
/*
▣ Giriş Örneği 1
5 8 4 3 7 15 17
▣ Çıktı Örneği 1
17 
*/

function solution(arr) {
let min = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min){
     min = arr[i];
  }
}
  return min;
}
let arr = [5, 8, 4, 3, 7, 15, 17];
console.log(solution(arr));

