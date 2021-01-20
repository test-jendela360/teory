function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return num > 1;
    } 
  } 
}

function sortNumberByCountPrime(numbers) {
  let obj = {};
  let output = [];

  for (let i = 0; i < numbers.length; i++) {
    let temp = [];
    let count = 2;

    while (count <= numbers[i]) {
      if (numbers[i] % count === 0) {
        if (isPrime(count)) {
          temp.push(count);
        }
      }
      count++;
    }
    obj[numbers[i]] = temp.length;
  }

  let sort = Object.keys(obj).sort(function (a, b) {
    return obj[a] - obj[b];
  });

  sort.forEach((el) => {
    output.push(Number(el));
  });

  return output;
}

console.log(sortNumberByCountPrime([3, 8, 45, 12, 78, 30, 79, 1]));
