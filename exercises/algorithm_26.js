// [problem] 
// Parantez girilirse parantezler doğruysa “EVET”, parantezler doğru değilse “HAYIR” çıkar.
// (())() Bu doğru parantez çiftidir, ancak (()())) doğru parantez değildir.

// ▣ Girdi Örneği 1
// (()(()))(()

// ▣ Çıktı Örneği 1
// NUMARA

function solution(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
