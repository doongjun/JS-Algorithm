function solution(s, t) {
  //풀이1
  /*
    let idx = [];
    let aaa = [];
    let answer = "";
    for(let i=0; i<s.length; i++){
        if(s[i] === t) idx.push(i);
    }
    
    for(let i=0; i<s.length; i++){
        for(let j=0; j<idx.length; j++){
            aaa.push(Math.abs(idx[j] - i))
        }
        answer += Math.min.apply(null, aaa) + " ";
        aaa = []
    }
    */
  //풀이2
  let p = 1000;
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) p = 0;
    else p++;
    answer.push(p);
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else p++;
    if (answer[i] > p) answer.splice(i, 1, p);
  }

  return answer;
}

let s = "teachermode";
let t = "e";
console.log(solution(s, t));
