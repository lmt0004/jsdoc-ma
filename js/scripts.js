/**
 * Clase que representa una tarea con texto y estado de completitud.
 * @class
 */
class Task {
    /**
     * Constructor de la clase Tarea con el texto proporcionado.
     * @constructor
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}

/**
 * Clase que gestiona una lista de tareas y proporciona métodos para agregar, eliminar y cambiar el estado de completitud de las tareas.
 * @class
 */
class TaskManager {
   /**
     * Constructor de la clase GestorTareas.
     * Inicializa las tareas desde el almacenamiento local o crea un array vacío si no hay datos almacenados.
     * @constructor
     */
    constructor() {
         // Recupera las tareas desde el almacenamiento local o inicializa un array vacío
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

 /**
  * Agrega una nueva tarea a la lista y actualiza el almacenamiento local.
  * @param {string} text - El texto de la nueva tarea.
  */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea en el índice especificado de la lista y actualiza el almacenamiento local.
     * @param {number} index - El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Cambia el estado de completitud de una tarea en el índice especificado y actualiza el almacenamiento local.
     * @param {number} index - El índice de la tarea a cambiar.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

     /**
     * Actualiza el almacenamiento local con la lista actual de tareas.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene la lista actual de tareas.
     * @returns {Task[]} - El array de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

// Crea una nueva instancia de GestorTareas
const taskManager = new TaskManager();

/**
 * Agrega una tarea al gestor de tareas y renderiza la lista de tareas actualizada.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}
/**
 * Elimina una tarea en el índice especificado del gestor de tareas y renderiza la lista de tareas actualizada.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}
/**
 * Renderiza la lista de tareas en el documento HTML.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para eliminar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('deleteButton'); // Agrega la clase deleteButton

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Cambia el estado de completitud de una tarea en el gestor de tareas y renderiza la lista de tareas actualizada.
 * @param {number} index - El índice de la tarea a cambiar.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

// Event listener para agregar una tarea
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Renderización inicial de tareas
renderTasks();
