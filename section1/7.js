function solution(day, arr) {
  var cnt = 0;
  for (let x of arr) {
    if (x % 10 === day) {
      cnt++;
    }
  }

  return cnt;
}

day = 0;
arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(day, arr));
