function solution(str) {
  let answer = "";
  //풀이1
  /*
    str = str.replace(/[^0-9]/g, '');
    
    if(str.charAt(0) === '0') str = str.replace('0', '');
    answer = parseInt(str);
    */

  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
