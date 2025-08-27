document.querySelectorAll('.countdown').forEach(container => {
    const endTime = new Date(container.dataset.saleEnd).getTime();

    const dayEl    = container.querySelector('.days');
    const hourEl   = container.querySelector('.hours');
    const minuteEl = container.querySelector('.minutes');
    const secondEl = container.querySelector('.seconds');

    function tick() {
      const now      = Date.now();
      const diffMs   = endTime - now;

      if (diffMs <= 0) {
        // sale’s over → zero everything
        dayEl.textContent    = '0';
        hourEl.textContent   = '0';
        minuteEl.textContent = '0';
        secondEl.textContent = '0';
        clearInterval(interval);
        return;
      }

      // total seconds left
      const totalSeconds = Math.floor(diffMs / 1000);

      // compute total units
      const days    = Math.floor(totalSeconds / (60 * 60 * 24));  // 86400s
      const hours   = Math.floor(totalSeconds / (60 * 60));       // 3600s
      const minutes = Math.floor(totalSeconds / 60);              // 60s
      const seconds = totalSeconds;                               // 1s

      // write them back
      dayEl.textContent = days;
      hourEl.textContent   = hours;
      minuteEl.textContent = minutes;
      secondEl.textContent = seconds;
    }

    // start immediately, then every second
    tick();
    const interval = setInterval(tick, 1000);
  });