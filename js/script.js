function toggleDevice(action) {
  var deviceIndex = document.getElementById("deviceSelect").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      updateDeviceState(deviceIndex, action);
    }
  };
  xhttp.open("POST", "/", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("device_" + deviceIndex + "=" + action);
}

function toggleAllDevices(action) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      updateAllDeviceStates(action);
    }
  };
  xhttp.open("POST", "/", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("all_devices=" + action);
}

function updateDeviceState(index, action) {
  var stateElement = document.getElementById("deviceState");
  stateElement.innerHTML = action === "ON" ? "Apagado" : "Encendido";
}

function updateAllDeviceStates(action) {
  var stateElements = document.querySelectorAll(".status");
  for (var i = 0; i < stateElements.length; i++) {
    stateElements[i].innerHTML = action === "ON" ? "Encendido" : "Apagado";
  }
}
