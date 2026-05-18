let a = document.getElementById("bulb");
a.addEventListener("mouseover", () => {
  a.src = "/Day-6/Images/bulb2.png";
});

a.addEventListener("mouseout", () => {
  a.src = "/Day-6/Images/bulb1.png";
});

let key = document.getElementById("key");
key.addEventListener("keypress", () => {
  let a = new Date();
  alert(a);
});

let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  document.write("<table border='2' width='50%'>");
  for (let i = 0; i < rows.value; i++) {
    document.write("<tr>");
    for (j = 0; j < cols.value; j++) {
      document.write("<td>" + "[" + i + "]" + "[" + j + "]" + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
});

// let colors = ["red", "green", "blue", "pink", "black", "orange"];
// let mybody = document.getElementById("mybody");
// let i = 0;
// setInterval(() => {
//   mybody.style.backgroundColor = colors[i];
//   ++i;
//   if (i == colors.length) {
//     i = 0;
//   }
// }, 1000);

let myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
let myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.cars[0];
