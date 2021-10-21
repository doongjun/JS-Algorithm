function solution(arr) {
  //풀이1
  /*
    let sum = [], max = Number.MIN_SAFE_INTEGER, answer = 0;
    for(let i=0; i<arr.length; i++){
        let h = Math.floor(arr[i]/100);
        let t = Math.floor((arr[i] - h*100)/10);
        let o = Math.floor(arr[i] - h*100 - t*10);

        sum.push(h+t+o);
    }
    
    for(let i=0; i<sum.length; i++){
        if(sum[i] > max){
            max = sum[i]
            answer = arr[i];
        }
        else if(sum[i] === max){
            if(arr[i] > answer) answer = arr[i];
        }
    }
    */

  //풀이2
  let answer = 0,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    //2-1
    /*
        while(tmp){
            sum += tmp%10;
            tmp = Math.floor(tmp/10);
        }*/

    //2-2
    sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
    sum = 0;
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
