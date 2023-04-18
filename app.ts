// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
let age: number = 50;
let name1: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;

if(typeof some === 'string') {
    str = some;
}

let person: [name: string, age: number] = ["Max", 21];

enum Fetch {
  LOADING,
  READY,
}

const s = {
  status: Fetch.LOADING,
};

let a : string | number;

let b : 'enable' | 'disable';

function showMessage(message : string) : void {
    console.log(message);
  }
  
  
  function calc(num1 :number, num2 : number) : number {
    return num1 + num2;
  }
  
  function customError() : never {
    throw new Error('Error');
  }

  type PageType = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
      createAt: Date,
      updateAt: Date,
    }
  }
