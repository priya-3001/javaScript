(function() {
    console.log("I am an IIFE");
})(); // this will call the function immediately after defining it and this is called IIFE (Immediately Invoked Function Expression)

(function named() {
    console.log("I am an Named IIFE");
})();

( (num1, num2) => {
    console.log(num1 + num2);
})(5, 10)