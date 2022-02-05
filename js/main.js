const content = document.querySelector(".content");
const fecha = document.querySelectorAll(".fecha");
const time = document.querySelectorAll(".time");

let ciudades = [
  "America/Buenos_Aires",
  "Europe/London",
  "Asia/Bangkok",
  "Australia/Sydney",
  "America/New_York",
  "Asia/Tokyo",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Moscow",
];

getHtml();

function getArreglo() {
  let actual = new Date();
  let str = "";
  for (let i = 0; i < ciudades.length; i++) {
    str +=
      actual.toLocaleString("en-GB", {
        timeZone: ciudades[i],
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }) + "espacio";
  }
  return str.split("espacio", ciudades.length);
}

function getHtml() {
  let diaArreglo = [];
  let tiempoArreglo = [];
  let arreglo = getArreglo();
  for (let i = 0; i < ciudades.length; i++) {
    diaArreglo.push(arreglo[i].split(",")[0]);
    tiempoArreglo.push(arreglo[i].split(",")[1]);
    fecha[i].innerHTML = diaArreglo[i];
    time[i].innerHTML = tiempoArreglo[i];
  }
}
setInterval(getHtml, 10000);
