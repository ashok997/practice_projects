// function to print Nth item in the fibonacci sequence
function fib(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}
