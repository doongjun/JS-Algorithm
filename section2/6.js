function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  //풀이1
  let rowsum = 0,
    columnsum = 0;
  let crosssum1 = 0;
  crosssum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      rowsum += arr[i][j];
      columnsum += arr[j][i];
    }
    if (rowsum > max) max = rowsum;
    else if (columnsum > max) max = columnsum;
    rowsum = 0;
    columnsum = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    crosssum1 += arr[i][i];
    crosssum2 += arr[i][arr.length - 1 - i];
  }

  if (crosssum1 > max) max = crosssum1;
  if (crosssum2 > max) max = crosssum2;

  answer = max;
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
