function solution(str) {
  let s = "",
    answer = "yes";
  //풀이1
  /*
    let eng_check = /[a-zA-Z]/;

    for(let x of str){
        if(eng_check.test(x)) s += x;
    }
    s = s.toLowerCase();
    let n = Math.floor(s.length/2);
    
    for(let i=0; i<n; i++){
        if(s[i] != s[s.length-i-1]) return "no";
    }
    */

  //풀이2
  s = str.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") != s) return "no";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
