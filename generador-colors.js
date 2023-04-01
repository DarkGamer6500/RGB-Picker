function generarColorRGB() {
  // Generamos un valor aleatorio entre 0 y 255 para cada componente RGB
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Devolvemos el color RGB en formato de cadena de texto
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Obtener referencias a los elementos HTML
var btnGenerarColor = document.getElementById("btn-generar-color");
var colorContainer = document.getElementById("color-container");


// Agregar evento click al botón
btnGenerarColor.addEventListener("click", function() {
  // Generar un color aleatorio
  var color = generarColorRGB();

  // Actualizar el fondo del elemento HTML
  colorContainer.style.backgroundColor = color;
});
