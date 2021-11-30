// [Problem]
// Girdi aşağıdaki gibi verildiğinde kelimeleri aynı harf olan kelimelerle gruplandırma.


// Girdi: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
// Çıktı:
// ['eat', 'tea', 'ate'],
// ["nat","tan"],
// ["bat] 
// Çıktıdaki sıra önemli değil.

const groupAnagrams = (strs) => {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
