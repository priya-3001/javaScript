const a = 123
let b = "hello "
var c = "world"
d = "!" // global variable

//a = 234
if (a === 123) {
	// let is like local variable, value should change only in scope
	let b = "hi " // new block-scoped variable, different from outer b
	c = "everyone" // this modifies the outer c (var is function-scoped)
	d = "!!" // this modifies the global d
	console.table({a, b, c, d}); // b = "hi " (local to this block)
}
console.table({a, b, c, d}); // b = "hello " (unchanged, as let is block-scoped)