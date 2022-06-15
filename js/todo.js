function $(selector) {
  return document.querySelector(selector);
}

function removeClass(className, element) {
  element.classList.remove(className);
}

function addClass(className, element) {
  element.classList.add(className);
}

//variables
let activeList;

document.querySelectorAll(".tab-button").forEach(element => {
  element.addEventListener('click', () => {
    setTimeout(() => {
      activeList = $('.tab-content_active');
      // console.log(activeList);  
      activeList.querySelectorAll('.movingToDoing').forEach(e => {
        e.addEventListener('click', () => {
          const movingTask = e.parentNode;
          const button = movingTask.querySelector('.movingToDoing')
          e.parentNode.parentNode.removeChild(movingTask);
          $('.doing-taskList').appendChild(movingTask);
          //!error -> classes not adding and removing 
          removeClass('not-done', movingTask);
          removeClass('movingToDoing',button);
          addClass(' movingToDone',button)
          addClass(' doing', movingTask);
        })
      })
    }, 0);
  });
});


