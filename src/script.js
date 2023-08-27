let button = document.querySelector(".key");
let display = document.querySelector(".display");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let equalToPressed = true;

let btnPressed = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    if (equalToPressed) {
      display.value = "";
      equalToPressed = false;
    }
    display.value += e.target.innerText;
  }
};

let evaluation = function () {
  if (display.value) {
    equalToPressed = true;
    display.value = eval(display.value);
  } else {
    display.value = "";
  }
};
let clearInput = function () {
  display.value = "";
};

let fetchIs = function () {
  let info = async () => {
    let data = await fetch("https://randomuser.me/api");
   let result = await data.json();
    console.log(result.results[0].name.first);
    alert(`My name is ${result.results[0].name.first}`)
  };
  info();
};

button.addEventListener("click", btnPressed);
equal.addEventListener("click", evaluation);//fetchIs
clear.addEventListener("click", clearInput);

// let companyInfo = async () => {
//   data = await fetch("https://jsonplaceholder.typicode.com/users");
//   result =await data.json();
//   result.map((res) => console.log(res.name));
// };
// companyInfo();

// import glory from "./glory.js";
// console.log(glory("Glory"));
