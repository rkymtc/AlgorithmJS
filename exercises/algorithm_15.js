// [Problem] Roma harflerini sayılara dönüştürme
// Argüman olarak 1 ile 3999 arasında bir Roma harfi s verilirse, karşılık gelen sayıyı döndürün. Rakamlarla ifade edilen Romen rakamları aşağıdaki gibidir:

// Sembol Değeri

// V  5
// X 10
// L 50
// C 100
// D 500
// M 1000

// Romen harflerini sayı olarak okumak için Latin harflerini soldan sağa doğru ekleyin. 
// III = 3 XII = 12 XXVII = 27.
// Bu arada 4'ü ifade ederken IIII değil IV'tür. İlk sayıyı son sayıdan çıkarın. 9, IX'dir.
// I V ve X'ten önce gelir, 4, 9 X, L, C, 40, 90'dan önce gelir C, D, M 400, 900'den önce gelir

function romanToNum(s) {
  const refArr = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const arrayS = s.split('');
  const newArr = arrayS.map((alphabet) => refArr[alphabet]);
  let result = 0;

  for (i = 0; i < s.length; i++) {
    newArr[i] < newArr[i + 1] ? (result -= newArr[i]) : (result += newArr[i]);
  }
  return result;
}

const s = 'XXVII';
console.log(romanToNum(s));
