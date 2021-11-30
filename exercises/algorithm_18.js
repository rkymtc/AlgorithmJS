// [Problem]
// dizide en çok tekrar eden sayıyı bulma
// Örneğin,
// sayılar = [2,2,1,1,1,2,2]
// 2 döndür
// sayılar = [3,2,3]
// 3 döndür

function moreThanHalf(nums) {
  let count = 0;
  let maxNum = 0;

  for (num of nums) {
    if (count === 0) {
      maxNum = num;
      count++;
    } else if (num === maxNum) {
      count++;
    } else {
      count--;
    }
  }
  return maxNum;
}

const nums = [2, 2, 1, 3, 3, 3, 4, 4, 4, 4];

console.log(moreThanHalf(nums));
