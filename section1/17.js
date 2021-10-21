function solution(arr) {
  let answer = [];
  //풀이1
  /*
    for(let x of arr){
        if(answer.indexOf(x) === -1){
            answer.push(x);
        }
    }*/

  //풀이2
  answer = arr.filter((value, index) => {
    if (arr.indexOf(value) === index) return value;
  });

  return answer;
}

let arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));
