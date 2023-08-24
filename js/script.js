// script.js

function toggleDevice(action) {
  var deviceIndex = document.getElementById("deviceSelect").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      updateDeviceState(deviceIndex, action);
    }
  };
  xhttp.open("POST", "/", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("device_" + deviceIndex + "=" + action);
}

function updateDeviceState(index, action) {
  var stateElement = document.getElementById("deviceState");
  stateElement.innerHTML = (action === "ON") ? "Apagado" : "Encendido";

  // Actualiza el atributo 'data-state' en los botones
  var buttons = document.querySelectorAll('input[type="button"]');
  buttons.forEach(function(button) {
    button.setAttribute('data-state', action);
  });
}

