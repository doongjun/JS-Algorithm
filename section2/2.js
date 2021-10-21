function solution(arr) {
  let answer,
    cnt = 0,
    max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      cnt++;
      max = arr[i];
    }
  }
  answer = cnt;
  return answer;
}

let arr = [130, 135, 148, 145, 150, 150, 153];
console.log(solution(arr));
