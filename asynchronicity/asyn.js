function fn1() {
  console.log(fn1.name);
  fn2()
}

function fn2() {
  console.log(fn2.name)
}
fn1()
setTimeout(function f3() {
  console.log('timeout');
}, 1000);

function fn4() {} 
fn4()
