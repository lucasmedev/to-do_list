
document.getElementById('addButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
    document.getElementById('emptyMessage').classList.add('hidden');
  } else {
    alert('Por favor, digite uma tarefa!');
  }
});

function addTask(taskText) {
  const taskList = document.getElementById('taskList');
  
  const li = document.createElement('li');
  
  const statusSquare = document.createElement('div');
  statusSquare.classList.add('task-status');
  statusSquare.innerHTML = '🔲'; 

  statusSquare.addEventListener('click', function() {
    if (statusSquare.classList.contains('completed')) {
      statusSquare.classList.remove('completed');
      statusSquare.innerHTML = '🔲';
    } else {
      statusSquare.classList.add('completed');
      statusSquare.innerHTML = '✅';
    }
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Remover';
  deleteButton.classList.add('deleteButton');
  deleteButton.addEventListener('click', function() {
    li.remove();
    checkEmptyList();
  });

  li.appendChild(statusSquare);
  li.appendChild(document.createTextNode(taskText));
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

function checkEmptyList() {
  const taskList = document.getElementById('taskList');
  const emptyMessage = document.getElementById('emptyMessage');
  
  if (taskList.children.length === 0) {
    emptyMessage.classList.remove('hidden');
  }
}
