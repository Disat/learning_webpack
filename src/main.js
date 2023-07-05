import creatHeading from "./heading.js";
import "./main.css";
import icon from "./avator.jpg";

const heading = creatHeading();

document.body.append(heading);

const img = new Image();
img.src = icon;
document.body.append(img);
