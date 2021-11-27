// [Problem] 
// Girdi olarak bir string alan ve kaç tane büyük harf olduğunu bulan bir program yazın.

// ▣ Girdi Örneği 1
// HerŞeyÇokGüzelOlmasaBileYanındayım
// ▣ Çıktı Örneği 1
// 7

// for of ifadesindeki koşullu ifade aracılığıyla toUpperCase yöntemini kullanarak karşılaştırma yapın 
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }

  return answer;
}
let str = 'HerŞeyÇokGüzelOlmasaBileYanındayım';
console.log(solution(str));

//2.yol
//veya sorunu charCodeAt() yöntemini kullanarak ASCII kodunu kullanarak çözün.
function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) {// Büyük Harf: 65-90, Küçük Harf: 97-122
      answer++;
    }
  }

  return answer;
}

let str = 'HerSeyCokGüzelOlmasaBileYanındayım';// türkçe karakterlere duyarlı değil buna dikkat edelim
console.log(solution(str));
