// [Problem] 
// Büyük harfle yazılanları küçük, küçük harfle yazılanları büyük yapan program?


// ▣ Girdi Örneği 1
// deRS ÇalışıyoRum.
// ▣ Çıktı Örneği 1
// DErs çALIŞIYOrUM.

function solution(s) {
  let result = '';
  for (let x of s) {
    x === x.toUpperCase()
      ? (result += x.toLowerCase())
      : (result += x.toUpperCase());
  }
  return result;
}

console.log(solution('deRS ÇalışıyoRum.'));
