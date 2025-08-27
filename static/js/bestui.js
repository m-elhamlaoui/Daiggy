
  const colors = ['#1e5d8a', 'rgb(15, 15, 184)', '#f43f5e','rgb(116, 106, 106)','rgb(201, 37, 37)']; // white, yellow, red
  const starContainer = document.getElementById('stars-container');

  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.className = 'star';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = color;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    starContainer.appendChild(star);
  }

  function moveStars() {
    document.querySelectorAll('.star').forEach(star => {
      const dx = (Math.random() - 0.5) * 40;
      const dy = (Math.random() - 0.5) * 40;
      star.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    setTimeout(() => {
      document.querySelectorAll('.star').forEach(star => {
        star.style.transform = 'translate(0, 0)';
      });
    }, 6000);
  }

  moveStars();
  setInterval(moveStars, 7000);
