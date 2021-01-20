function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

function SumOddPrimes(N) {
  let a = 0;

  for (let i = 3; i < N; i++) {
    oddNumber = true;
    a = N - i;

    if (isPrime(a) && isPrime(i)) {
      return `${N} = ${i} + ${a}`;
    }
  }
}

console.log(SumOddPrimes(20));
