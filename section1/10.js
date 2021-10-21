function solution(str, chr) {
  let answer,
    cnt = 0;

  for (let x of str) {
    if (x === chr) {
      cnt++;
    }
  }
  answer = cnt;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
let chr = "R";
console.log(solution(str, chr));
