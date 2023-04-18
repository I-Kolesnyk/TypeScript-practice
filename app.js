// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
var age = 50;
var name1 = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
var anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === 'string') {
    str = some;
}
var person = ["Max", 21];
var Fetch;
(function (Fetch) {
    Fetch[Fetch["LOADING"] = 0] = "LOADING";
    Fetch[Fetch["READY"] = 1] = "READY";
})(Fetch || (Fetch = {}));
var s = {
    status: Fetch.LOADING,
};
var a;
var b;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
