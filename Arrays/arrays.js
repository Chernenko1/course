function findMinNum(arr) {
  let minNum = Math.min(...arr);
  return minNum;
}

console.log(findMinNum([3, 12, 10, 4, 3, 1, 56, 76, 34, 342, 12]));
