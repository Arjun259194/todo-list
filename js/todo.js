function $(selector) {
  return document.querySelector(selector);
}

function createTask(text,btnClassName,elementClassName) {
  const task = document.createElement('li');
  task.className = elementClassName;
  task.innerHTML = `<span>${text}</span><button class="${btnClassName}">✔</button>`
  console.log(task);
  return task
  // return `<li class="doing task">${text}<button class="movingToDone">✔</button></li>`;
}

//variables
let activeList;

document.querySelectorAll(".tab-button").forEach(element => {
  element.addEventListener('click', () => {
    setTimeout(() => {
      activeList = $('.tab-content_active');
      //*not-done to doing
      activeList.querySelectorAll('.movingToDoing').forEach(e => {
        e.addEventListener('click', () => {
          const movingTask = e.parentNode;
          const text = movingTask.querySelector('span').innerText;
          console.log(text);
          e.parentNode.parentNode.removeChild(movingTask);
          $('.doing-taskList').appendChild(createTask(text,'movingToDone','doing task'));
        })
      })

      //*doing to done
      activeList.querySelectorAll('.movingToDone').forEach(e => {
        e.addEventListener('click', () => {
          const movingTask = e.parentNode;
          const text = movingTask.querySelector('span').innerText;
          console.log(text);
          e.parentNode.parentNode.removeChild(movingTask);
          $('.done-taskList').appendChild(createTask(text,'movingToNotDone','done task'));
        })
      })

      //*done to not-done
      activeList.querySelectorAll('.movingToNotDone').forEach(e => {
        e.addEventListener('click', () => {
          const movingTask = e.parentNode;
          const text = movingTask.querySelector('span').innerText;
          console.log(text);
          e.parentNode.parentNode.removeChild(movingTask);
          $('.not-done-taskList').appendChild(createTask(text,'movingToDoing','not-done task'));
        })
      })
    }, 0);
  });
});


