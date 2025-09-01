document.body.addEventListener('mousemove', (event) => {
  const eye = document.querySelector('.eye');
  const socket = document.querySelector('.logo');

  if (!eye || !socket) return;

  const socketRect = socket.getBoundingClientRect();
  const centerX = socketRect.left + socketRect.width / 2;
  const centerY = socketRect.top + socketRect.height / 2;

  const dx = event.pageX - centerX;
  const dy = event.pageY - centerY;

  const angle = Math.atan2(dy, dx);
  const maxDistance = 10;
  const moveX = Math.cos(angle) * maxDistance;
  const moveY = Math.sin(angle) * maxDistance;

  eye.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
});
