import '../css/style.css'
import '../css/title.less'
import "../css/image.css"
const divEl = document.createElement("div");
divEl.className= "title";
divEl.innerHTML ="你好啊,李银河";

//设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className= "image-bg";

document.body.appendChild(divEl);