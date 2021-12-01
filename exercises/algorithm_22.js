// [Problem ]

// Faktöriyel, 1'den n'ye kadar olan tüm tam sayıların çarpımıdır.

// Bir! = 1
// 2! = 1 * 2
// 5! = 1 * 2 * 3 * 4 * 5

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));
