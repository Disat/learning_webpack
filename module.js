export let name = "vhxn";

function hello() {
  console.log("Hello");
}

let age = 12;

// This isn't object literty.
export { hello as hel };

// default 方式导出的是对象，变量，字面量
// export default age;

export default { age, name };

// 将引用导出，和commentjs不同
setTimeout(() => {
  name = "catuia";
}, 1000);
