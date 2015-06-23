var fib = function (n) {
  return n > 2 ? fib(n - 2) + fib(n - 1) : n;
};

for (var i = 0, len = 12; i < len; i++) {
  console.log(fib(i));
}
