// [Problem]
// Girdi olarak bir dizi karakter iletirseniz, karakteri ters çevirin ve döndürün.

// Yeni bir dizi bildirme.
// Argüman olarak alınan diziyi değiştirin ve oluşturun.

// Girdi: ["h","e","l","l","o"]
// Çıktı: ["o","l","l","e","h"]

// Girdi: ["H","a","n","n","a","h"]
// Çıktı: ["h","a","n","n","a","H"]

const reverseString = (s) => {
  let temp;
  let start = 0;
  let end = s.length - 1;
  while (end > Math.floor(s.length / 2)) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    end--;
    start++;
  }
  return s;
};

const s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(s));
