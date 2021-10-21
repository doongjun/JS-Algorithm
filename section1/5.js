//풀이1
/*
function solution(arr){
    
    arr.sort(function(x, y){
        return x-y;
    });

    return arr[0];
}
*/

//풀이2
/*
function solution(arr){
    let answer, min = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }

    answer = min;
    return answer;
}*/

//풀이3
function solution(arr) {
  // 전개 연산자 ... 사용
  //let answer, min = Math.min(...arr);

  //apply 사용
  let answer = Math.min.apply(null, arr);

  return answer;
}

let arr = [5, 3, 7, 11, 1, 15, 17];
console.log(solution(arr));
