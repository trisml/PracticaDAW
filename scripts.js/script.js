

// Agrega un evento al botón en JavaScript
const taskBtn = document.getElementById("taskBtn"); // Reemplaza "taskBtn" con el ID de tu botón.
taskBtn.addEventListener("click", addTask);

// Agrega un evento al botón "Limpiar Tareas" en JavaScript
const clearBtn = document.getElementById("clearTasks"); // Reemplaza "clearTasks" con el ID de tu botón.
clearBtn.addEventListener("click", clearAllTasks);

// Agrega un evento para detectar la tecla "Enter" en el campo de entrada
taskInput.addEventListener("keyup", function (event) {
  (event.key === "Enter") ? addTask() : null;
});

function addTask() {
  // Obtiene el valor del campo de entrada y lo elimina de espacios en blanco al principio y al final
  const taskText = taskInput.value.trim();

  if (taskText === ""){
      alert("Por favor, ingrese una tarea válida.");
      return
  }}