function solution(arr) {
  //풀이1
  /*
    let answer = "", cnt = 1;

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[i]) cnt++;
        }
        answer += cnt+' ';
        cnt = 1;
    }
    */

  //풀이2
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
