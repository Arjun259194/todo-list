function $(selector) {
  return document.querySelector(selector);
}

//variables
let activeList;

document.querySelectorAll(".tab-button").forEach(element => {
  element.addEventListener('click',()=>{
    setTimeout(() => {
      activeList = $('.tab-content_active');
      // console.log(activeList);  
      activeList.querySelectorAll('.movingToDoing').forEach(e=>{
        e.addEventListener('click',()=>{
          const movingTask = e.parentNode;
          e.parentNode.parentNode.removeChild(movingTask);
          $('.doing-taskList').appendChild(movingTask);
          movingTask.classList.remove('.note-done');
          movingTask.classList.add('.doing');
        })
      })
    }, 0);
});
});


