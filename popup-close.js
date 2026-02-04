document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (e) {
    const trigger = e.target.closest('.popup-close a');
    if (!trigger) return;

    e.preventDefault();

    const popup = trigger.closest('.elementor-popup-modal');
    if (!popup) return;

    const dialogClose = popup.querySelector('.dialog-close-button');
    if (dialogClose) {
      dialogClose.click();
    }
  });
});
