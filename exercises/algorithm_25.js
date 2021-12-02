// [Problem] 
// N sayıdan oluşan bir dizi verildi.
// Ardışık alt dizilerin toplamının bu dizide kaç kez belirli bir 
// M sayısı olduğunu sayan bir program yazın.
// N=8 ise, M=6 ve dizi
// 1 2 1 3 1 1 1 2
// Toplamı 6 olan 3 ardışık alt dizi var: {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}.


// ▣ Girdi Örneği 1
// 1 2 1 3 1 1 1 2

// ▣ Çıktı Örneği 1
// 3
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
