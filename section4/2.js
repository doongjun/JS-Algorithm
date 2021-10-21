function solution(arr) {
  let answer = [];

  //풀이1
  /*
    for(let x of arr){
        let tmp = 0;
        let a = parseInt(x.toString().split('').reverse().join(''));
        for(let i=2; i<a; i++){
            if(a !== 2 && a%i === 0){
                tmp = 1;
                break;
            }
        }
        if(tmp === 0 && a !== 1) answer.push(a);
    }*/

  //풀이2
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
