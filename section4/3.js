function solution(arr) {
  let answer = 0,
    res = [],
    n = 4;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      var cnt = 0;
      for (let k = 0; k < arr.length; k++) {
        var x = 0,
          y = 0;
        for (let t = 0; t < n; t++) {
          if (arr[k][t] === i) x = t;
          if (arr[k][t] === j) y = t;
        }
        console.log("===========");
        console.log(i + "," + j);
        console.log("k" + k);
        console.log("x:" + x + "," + "y:" + y);
        if (x < y) {
          cnt++;
        }
        console.log(cnt);
      }
      if (cnt === arr.length) answer++;
      console.log(answer);
    }
  }
  console.log("answer:::");

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
