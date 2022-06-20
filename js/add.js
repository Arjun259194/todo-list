var tabCount = 0;

const appendElement = (parentElementSelector,element) => {
  $(parentElementSelector).appendChild(element);
}

const createTab = ()=>{
  const newList = document.createElement('div');
  newList.classList.add('tab-content');
  newList.dataset.tabId = tabCount;
  newList.innerHTML =
  `<div class="todoList">
  <!-- h2 is temporary-->
      <h2 style="text-align: center; grid-column:1/span 3;margin:1rem 0;">list #${tabCount}</h2>
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

const createTabBtn = ()=>{
  const tabBtn = document.createElement('button');
  const btnText = document.createTextNode(`list #${tabCount}`);
  tabBtn.appendChild(btnText);
  tabBtn.classList.add('tab-button');
  tabBtn.dataset.tabButtonId = tabCount;

  return tabBtn;
}

const createList = ()=>{
  tabCount++;
  const tab = createTab();
  const tabButton = createTabBtn();

  appendElement('.tab',tab);
  appendElement('.tab-list',tabButton);

  setup();
  tabButton.click();
  taskManegament();

}