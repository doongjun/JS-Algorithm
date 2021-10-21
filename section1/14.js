function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}

let arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(arr));
