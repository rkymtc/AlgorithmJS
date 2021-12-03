// [problem] 
//Bu problem, aynı string olan palindrom string'in önden veya arkadan okurken doğru olup olmadığını kontrol etmektir.
// Palindrom dizesini kontrol etme sorunu için, genellikle ters yöntemi kullanarak dizeyi tersine çevirin, 
// mevcut dizeyle karşılaştırın ve doğruysa 'evet', yanlışsa 'Hayır' çıktısını alın.

// ▣ Girdi Örneği 1
// 'found7, time: study; Yduts; emit, 7Dnuof'
// ▣ Çıktı Örneği 1
// EVET


function solution(s) {
  let result = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return result;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
