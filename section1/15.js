//풀이1
/*
function solution(str){
    let answer;
    if(str.length%2 === 0){
        answer = str[parseInt(str.length/2)-1] + str[parseInt(str.length/2)];
    }
    else{
        answer = str[parseInt(str.length/2)];
    }

    return answer;
}*/

function solution(str) {
  let answer;
  let mid = Math.floor(str.length / 2);

  //풀이 2
  /*
    if(str.length%2 === 0){
        answer = str.substring(mid-1, mid+1);
    }
    else{
        answer = str.substring(mid, mid+1);
    }
    */

  //풀이3
  if (str.length % 2 === 0) {
    answer = str.substr(mid - 1, 2);
  } else {
    answer = str.substr(mid, 1);
  }
  return answer;
}

str = "good";
console.log(solution(str));
