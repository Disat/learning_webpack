import "./heading.css";
// 理解新事物（webpack思想）是学习新技术的关键
export default () => {
  const element = document.createElement("h2");
  element.classList.add("heading");
  element.textContent = "Hello World";
  element.addEventListener("click", () => {
    alert("hello webpack");
  });

  return element;
};
