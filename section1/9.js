//풀이 1 질문해놓음
function solution(str) {
  let arr = [];
  let answer = arr;
  console.log(answer);
  console.log(arr);
  arr = [1, 2, 3, 4, 5];
  //arr = str.split("");
  console.log(answer);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arr.splice(i, 1, "#");
    }
  }

  answer = arr.join("");

  return answer;
}

//풀이2
/*
function solution(str){
    let answer = "";

    for(let x of str){
        if(x === 'A'){
            answer += '#';
        }
        else{
            answer += x;
        }
    }

    return answer;
}
*/

//풀이3
/*
function solution(str){
   let answer;

   answer = str.replace(/A/g, '#');

   return answer;

}
*/
let str = "BANANA";
console.log(solution(str));
