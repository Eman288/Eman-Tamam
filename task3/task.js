//task1

num1 = 10;
num2 = 50;
console.log(`${num1 + num2}\n${num2 / num1}\n`);
console.log(parseInt(num1 + "" + num2));
console.log(Number(num1 + "" + num2));
console.log(`${num2 % num1}`);

//task2

let h = document.createElement("h1");
h.textContent = "first session js";
document.body.appendChild(h);

let p = document.createElement("p");
p.textContent = "hello from js";
document.body.appendChild(p);


//task3
console.log("hello from js");
console.log(p.textContent);
console.log(`hello from js`);
console.error("hello from js");
setInterval(() => alert("hello from js"), 4000);
