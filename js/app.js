function setup() {
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const buttonDataId = btn.dataset.tabButtonId;
      const tabToActive = document.querySelector(`.tab-content[data-tab-id="${buttonDataId}"]`);

      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("tab-button_active");
      });

      document.querySelectorAll(".tab-content").forEach((tabs) => {
        tabs.classList.remove("tab-content_active");
      });

      btn.classList.add("tab-button_active");
      tabToActive.classList.add("tab-content_active");
    });
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  setup();
  document.querySelector('.tab-button').click();
})