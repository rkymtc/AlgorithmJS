/*[Problem]
Verilen 7 sayının en küçüğünü yazdıran bir program yazın.

▣ Giriş Örneği 1
5 8 4 3 7 15 17
▣ Çıktı Örneği 1
3
*/


/*
Minimum değer hesaplanırken, tamsayılar arasındaki maksimum tamsayı değerini belirten
Number.MAX_SAFE_INTEGER kullanılarak minimum değer başlangıçta ayarlanır,
if ifadesini kullanarak değerleri karşılaştırdıktan sonra min fonksiyonuna daha 
küçük bir değer koyarak sorunu çözebilirsiniz.
*/
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
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
    if (arr[i] > min) min = arr[i];
  }
  return min;
}
let arr = [5, 8, 4, 3, 7, 15, 17];
console.log(solution(arr));

