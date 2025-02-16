const apply_form = document.getElementById('apply_form');

apply_form.addEventListener('submit', (event) => {

  // Handle form data and send it to server

    showToast('Message sent successfully!');
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.classList.remove('success', 'error');
    }, 300);
  }, 2000);
});

  

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.querySelector('.toast-message');
  
    toastMessage.textContent = message;
  
    // Add a class for styling based on type
    toast.className = 'toast';
    if (type === 'success') {
      toast.classList.add('success');
    } else if (type === 'error') {
      toast.classList.add('error');
    }
  
    toast.style.opacity = '1';
  
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.classList.remove('success', 'error');
      }, 300);
    }, 2000);
  }
