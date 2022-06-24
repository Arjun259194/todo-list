//variables
let activeList;

function $(selector) {
  return document.querySelector(selector);
}

function createTask(text, btnClassName, elementClassName, btnText) {
  const task = document.createElement('li');
  task.className = elementClassName;
  task.innerHTML = `<span>${text}</span><button class="${btnClassName}">${btnText}</button>`
  return task
}

function taskManegament() {
  setup();
  activeList = $('.tab-content_active');

  //*not-done to doing
  activeList.querySelectorAll('.movingToDoing').forEach(e => {
    e.addEventListener('click', () => {
      const movingTask = e.parentNode;
      const text = movingTask.querySelector('span').innerText;
      const taskList = movingTask.parentNode;
      taskList.removeChild(movingTask);
      activeList.querySelector('.doing-taskList').appendChild(createTask(text, 'movingToDone task-btn', 'doing task', 'next'));
      taskManegament();
    })
  })

  //*doing to done
  activeList.querySelectorAll('.movingToDone').forEach(e => {
    e.addEventListener('click', () => {
      const movingTask = e.parentNode;
      const text = movingTask.querySelector('span').innerText;
      const taskList = movingTask.parentNode;
      taskList.removeChild(movingTask);
      activeList.querySelector('.done-taskList').appendChild(createTask(text, 'movingToNotDone task-btn', 'done task', 'remove'));
      taskManegament();
    })
  })

  //*done to not-done
  activeList.querySelectorAll('.movingToNotDone').forEach(e => {
    e.addEventListener('click', () => {
      const movingTask = e.parentNode;
      const taskList = movingTask.parentNode;
      taskList.removeChild(movingTask);
      taskManegament();
    })
  })
}
