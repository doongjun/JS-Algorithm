function solution(str) {
  let answer = "yes";

  //풀이1
  /*
    a = str.toLowerCase().split("").reverse().join("")

    if(str.toLowerCase() === a)answer = "yes";
    else answer = "no";
    */

  //풀이2
  let n = Math.floor(str.length / 2);
  let s = str.toLowerCase();
  for (let i = 0; i < n; i++) {
    if (s[i] != s[s.length - i - 1]) return "no";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
