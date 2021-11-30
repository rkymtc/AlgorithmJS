// [Problem]
// strs bir kelime dizisidir. Lütfen ortak bir başlangıç ​​sözcüğü döndürün.
// ör. strs = ['start', 'stair', 'step'] dönüş 'st'
// strs = ['start', 'study', 'today'] dönüş '' // ortak yoksa boş döner

const getPrefix = (strs) => {
  let prefix = strs[0];
  if (!strs.length) {
    prefix = '';
  }

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

const strs = ['start', 'stair', 'step'];
console.log(getPrefix(strs));
