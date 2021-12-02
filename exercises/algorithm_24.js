// [Problem] 
// İki küme A ve B verildiğinde, iki kümenin ortak öğelerini çıkaran ve bunları 
// artan sırada veren bir program yazın.

// ▣ Girdi Örneği 1
// 5
// 1 3 9 5 2
// 5
// 3 2 5 7 8

// ▣ Çıktı Örneği 1
// 2 3 5
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort();
  arr2.sort();
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
