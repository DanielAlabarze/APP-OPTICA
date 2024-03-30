const modo = document.querySelector(".modoOscuro");
const btnModo = document.querySelector(".cambioModo");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const input6 = document.querySelector(".input6");
const total = document.querySelector(".total");
const btnInversion = document.querySelector(".btnInversion");
const btnResetear = document.querySelector(".btnResetear");

btnModo.addEventListener("click", (e) => {
  modo.classList.toggle("modoOscuro");
});

function inputsOd() {
  return parseFloat(input1.value) + parseFloat(input2.value);
}

function inputsOi() {
  return parseFloat(input4.value) + parseFloat(input5.value);
}

function cilindroOd() {
  if (input2.value < 0) {
    return parseFloat(input2.value) - parseFloat(input2.value) * 2;
  } else {
    return parseFloat(input2.value) - parseFloat(input2.value) * 2;
  }
}

function cilindroOi() {
  if (input5.value < 0) {
    return parseFloat(input5.value) - parseFloat(input5.value) * 2;
  } else {
    return parseFloat(input5.value) - parseFloat(input5.value) * 2;
  }
}

function gradosOd() {
  return parseInt(input3.value) + 90;
}

function gradosOi() {
  return parseInt(input6.value) + 90;
}

btnInversion.addEventListener("click", (e) => {
  total.innerHTML =
    "La transcripción para Ojo Derecho es:" +
    "<br>" +
    "Esférico " +
    inputsOd().toFixed(2) +
    " , Cilíndrico " +
    cilindroOd().toFixed(2) +
    " , en " +
    gradosOd() +
    " grados" +
    "<br>" +
    "<br>" +
    " La transcripción para Ojo Izquierdo es:" +
    "<br>" +
    "Esférico " +
    inputsOi().toFixed(2) +
    " , Cilíndrico " +
    cilindroOi().toFixed(2) +
    " , en " +
    gradosOi() +
    " grados";

  if (
    input1.value == "" ||
    input2.value == "" ||
    input3.value == "" ||
    input4.value == "" ||
    input5.value == "" ||
    input6.value == ""
  ) {
    total.innerHTML =
      "Ingrese Valores en todos los Campos" +
      "<br>" +
      "<br>" +
      "<small>Para graduaciones con decimales usar un ( . ) y no una ( , ) para separar los valores.</small>" +
      "<br>" +
      "<br>" +
      "<small>Introducir valores sin signo si el valor es positivo y con signo ( - ) adelante si el valor es negativo.</small>";
  }
});

btnResetear.addEventListener("click", (e) => {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
  input6.value = "";
  total.innerText = "La inversión aparecerá aquí";
});
