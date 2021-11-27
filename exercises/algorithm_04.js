/* [Problem] 
N doğal sayısı girildiğinde toplamını 1'den N'ye kadar toplayan bir program yazın. (N dahil)

▣ Girdi Örneği 1
7
▣ Çıktı Örneği 1
28
▣ Girdi Örneği 2
11
▣ Çıktı Örneği 2
66
*/

// Girilen değerlerin toplamını bulma sorunu for deyimi ile kolayca çözülebilir.

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(7));
console.log(solution(11));
