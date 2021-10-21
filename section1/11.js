function solution(str) {
  let answer,
    cnt = 0;
  for (let x of str) {
    //풀이1
    /*if(x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90){
            cnt++;
        }*/

    //풀이2
    if (x === x.toUpperCase()) cnt++;
  }
  answer = cnt;
  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));
