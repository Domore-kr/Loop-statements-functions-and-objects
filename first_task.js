function prime_numbers(arg) {
    let prime = [1]
    for (let i = 1; i <= arg; i++) {
        for (let j = 2; j <= i; j++) {
          if (i % j === 0 && j < i) {
            break;
          } else if (j === i) {
            prime.push(i);
          }
        }
      }
    console.log(prime)
};

prime_numbers(process.argv[2])
