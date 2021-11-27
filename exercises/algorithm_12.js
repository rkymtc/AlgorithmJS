// [Problem]
// Girilen metnin tamanını büyük harf yapan program.

// ▣ Girdi Örneği 1
// Çalışma Zamanı
// ▣ Çıktı Örneği 1
// ÇALIŞMA ZAMANI

// Uygulamanın en kolay yolu toUpperCase yöntemini kullanmaktır.
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    }
    else {
      answer += x;
    }
  }

  return answer;
}
let str = 'Çalışma Zamanı';
console.log(solution(str));

// 2.Yol
// ASCII koduna erişilerek uygulandı

function solution(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    }
    else {
      answer += x;
    }
  }
  return answer;
}
let str = 'Calisma Zamani'; // Tr karakter uyumlu değil.
console.log(solution(str));
