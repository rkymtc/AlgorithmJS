// [Problem]
// Parantez ( ) arasındaki tüm karakterleri giriş dizesinden kaldıran ve yalnızca 
// kalan karakterleri yazdıran bir program yazın.


// ▣ Girdi Örneği 1
// (A(BC)D)EF(G(H)(IJ)K)LM(N)

// ▣ Çıktı Örneği 1
// EFLM

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
