/* [Problem] 
 Kelimedeki tüm 'A'ları '#' ile değiştirerek büyük harflerden oluşan İngilizce 
bir kelime çıkaran bir program yazın.
*/

// ▣ Girdi Örneği 1
// BANANA
// ▣ Çıktı Örneği 1
// B#N#N#


function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') {
      answer += '#';
    }
    else answer += x;
  }
  return answer;
}
let str = 'BANANA';
console.log(solution(str));

// 2.YOL
function solution(s) {
  let answer = s;
  answer = s.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution(str));
