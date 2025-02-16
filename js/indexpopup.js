const contact_Form = document.getElementById('contact_Form');

contact_Form.addEventListener('submit', (event) => {

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

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const videoModal = document.getElementById('video-modal');
  const closeButton = document.querySelector('.close');
  const videoIframe = document.getElementById('video-iframe');
  
  const videoUrl = 'https://www.youtube.com/embed/E7b2swlDKQY'; // Replace with your YouTube video URL

  playButton.addEventListener('click', () => {
      videoIframe.src = `${videoUrl}?autoplay=1`; // Add autoplay parameter
      videoModal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
      videoIframe.src = ''; // Stop video
      videoModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === videoModal) {
          videoIframe.src = ''; // Stop video
          videoModal.style.display = 'none';
      }
  });
});
