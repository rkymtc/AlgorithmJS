// sorun
// Dizi içerisinde verilen 0 karakterlerini dizinin sonuna alan program.

// Girdi: [0, 1, 0, 3, 12]
// Çıktı: [1, 3, 12, 0, 0]
const moveZeroes = (nums) => {
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
