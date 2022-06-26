//*system to add new lists
var tabCount = 0;

const appendElement = (parentElementSelector, element) => {
  $(parentElementSelector).appendChild(element);
};

const defaultTitle = () => `List #${tabCount}`;

const createTab = (title) => {
  const newList = document.createElement("div");
  newList.classList.add("tab-content");
  newList.dataset.tabId = tabCount;
  newList.innerHTML = `<div class="todoList">
  <!-- h2 is temporary-->
      <h2 style="text-align: center; grid-column:1/span 3;margin:1rem 0; text-transform: uppercase;">${title === false ? defaultTitle() : title}</h2>
      <dev class="not-done list">
        <div class="list-header">
          <h1>Not Done</h1>
          <button class="add-task">+</button>
        </div>
        <ul class="not-done-taskList taskList">
          <li class="not-done task"><span>demo:task that is not done yet</span><button class="movingToDoing task-btn">next</button></li>
        </ul>
      </dev>
      <dev class="doing list">
        <div class="list-header">
          <h1>Doing</h1>
          <button class="add-task">+</button>
        </div>
        <ul class="doing-taskList taskList">
          <li class="doing task"><span>demo: task that is in progress</span> <button class="movingToDone task-btn">next</button></li>
        </ul>
      </dev>
      <dev class="done list">
        <div class="list-header">
          <h1>Done</h1>
          <button class="add-task">+</button>
        </div>
        <ul class="done-taskList taskList">
          <li class="done task"><span>demo: task that is done</span><button class="remove task-btn">remove</button></li>
        </ul>
      </dev>
    </div>`;

  return newList;
};

const createTabBtn = (title) => {
  const tabBtn = document.createElement("button");
  const btnText = document.createTextNode(`${title === false ? defaultTitle() : title}`);
  tabBtn.appendChild(btnText);
  tabBtn.classList.add("tab-button");
  tabBtn.dataset.tabButtonId = tabCount;

  return tabBtn;
};

const titleRequest = () => ($("#input-box").style.display = "flex");

const createBtn = () => {
  let title = $("#listTitle").value;
  $("#input-box").style.display = "none";
  title = title === "" || title === null ? false : title;
  createList(title);
  return;
};

const cancelBtn = () => {
  $("#input-box").style.display = "none";
  console.warn("list not created");
  return;
};

const createList = (ListTitle) => {
  tabCount++;
  const tab = createTab(ListTitle);
  const tabButton = createTabBtn(ListTitle);
  appendElement(".tab", tab);
  appendElement(".tab-list", tabButton);
  setup();
  tabButton.click();
};

//*system to add new tasks

const classNameFormatter = (className) => {
  result = className
    .split(" ")
    .map((s) => "." + s)
    .join(" ")
    .replace(" ", "");
  return result;
};

const noteReq = () => {
  //todo: create a input pop-up box for user input
  let ranNotes = ["go to gym", "do homework", "send email to boss", "pay light bill", "order xyz from amezon", "debug the adding code", "run test on fakker api"];
  let index = Math.floor(Math.random() * ranNotes.length);

  return ranNotes[index];
};

const addtask = (taskObj) => {
  const task = createTask(taskObj.taskNote, taskObj.buttonClass, taskObj.taskClassName, taskObj.buttonText);
  try {
    taskObj.taskList.appendChild(task);
  } catch (err) {
    alert("there is an error:\n", err);
  }
};

const addTaskEventListener = () => {
  $(".tab-content_active")
    .querySelectorAll(".add-task")
    .forEach((element) => {
      element.addEventListener("click", () => {
        const taskData = {};
        taskData.taskNote = noteReq();
        taskData.list = element.parentNode.parentNode;
        taskData.taskList = taskData.list.querySelector(".taskList");
        taskData.taskClassName = taskData.taskList.querySelector(".task").className;
        taskData.taskButton = taskData.list.querySelector(".task-btn");
        taskData.buttonClass = taskData.taskButton.className;
        taskData.buttonText = taskData.taskButton.innerText;
        addtask(taskData);
        taskManegament();
      });
    });
};
