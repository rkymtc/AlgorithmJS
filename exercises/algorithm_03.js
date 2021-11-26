/* [Problem] 
Her öğrenciye bir kalem dağıtıldığını varsayarsak, N sayıdaki öğrenciye
kaç düzine kurşun kalem gerektiğini sayan bir program yazın. (kalem almayan öğrenci kalmayacak!)
not : 1 düzine = 12 
*/

// ▣ Girdi Örneği 1
// 37
// ▣ Çıktı Örneği 1
// 4

// ▣ Girdi Örneği 2
// 166
// ▣ Çıktı Örneği 2
// 14

// virgüllü sonuç(14,7 düzine gibi) elde etmemek için sonucu math.ceil ile yazdıralım. 

function solution(n) {
  let result = Math.ceil(n / 12);
  return result;
}

console.log(solution(37));
console.log(solution(166));
