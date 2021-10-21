//내 풀이 (비효율적임)
/*
function solution(arr){
    let answer = [], sum = 0;
    let a;
    var nonans = [];
    for(let x of arr){
        sum += x;
    }

    a = sum - 100;

    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === a){
                nonans.push(arr[i]);
                nonans.push(arr[j]);
            }
        }
    }
    console.log(nonans);
    
    for(let x of arr){
        if(x === nonans[0] || x === nonans[1]) continue;

        answer.push(x);
    }

    return answer;
}
*/

//풀이2
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}

arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
