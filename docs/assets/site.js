'use strict';
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = button.parentElement.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Could not copy. Select the email address above to copy it manually.';
    }
  });
});
