var tabCount = 0;

const appendElement = (parentElementSelector, element) => {
  $(parentElementSelector).appendChild(element);
}

const defaultTitle = () => `List #${tabCount}`;

const createTab = (title) => {
  const newList = document.createElement('div');
  newList.classList.add('tab-content');
  newList.dataset.tabId = tabCount;
  newList.innerHTML =
    `<div class="todoList">
  <!-- h2 is temporary-->
      <h2 style="text-align: center; grid-column:1/span 3;margin:1rem 0; text-transform: uppercase;">${title === false ? defaultTitle() : title
    }</h2>
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
          <li class="done task"><span>demo: task that is done</span><button class="movingToNotDone task-btn">remove</button></li>
        </ul>
      </dev>
    </div>`

  return newList;
}

const createTabBtn = (title) => {
  const tabBtn = document.createElement('button');
  const btnText = document.createTextNode(`${title === false ? defaultTitle() : title
    }`);
  tabBtn.appendChild(btnText);
  tabBtn.classList.add('tab-button');
  tabBtn.dataset.tabButtonId = tabCount;

  return tabBtn;
}

const titleRequest = () => $('#input-box').style.display = "flex";


const createBtn = () => {
  let title = $('#listTitle').value;
  $('#input-box').style.display = "none";
  title = (title === "" || title === null) ? false : title;
  createList(title);
  return;
}

const cancelBtn = () => {
  $('#input-box').style.display = "none";
  console.warn("list not created");
  return;
}

const createList = (ListTitle) => {
  tabCount++;
  const tab = createTab(ListTitle);
  const tabButton = createTabBtn(ListTitle);
  appendElement('.tab', tab);
  appendElement('.tab-list', tabButton);
  setup();
  tabButton.click();
  taskManegament();
}