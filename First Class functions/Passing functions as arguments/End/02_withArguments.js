// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02 **SOLUTION**
function callWith2Arguments(arg1, arg2, func) {
  return func(arg1, arg2)
}

callWith2Arguments(1, 2, add)
callWith2Arguments(9, 4, subtract)

callWith2Arguments(2, 4, function(x, y) {
  console.log(x * x + y * y)
})

function add(x, y) {
  console.log( x + y)
}

function subtract(x, y) {
  console.log( x - y)
}
