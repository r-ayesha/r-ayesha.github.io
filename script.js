
 // "Last login" line
(function () {
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const pad = n => String(n).padStart(2, '0');
  const stamp = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()} ` +
                `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  const login = document.getElementById('login');
  if (login) {
    login.textContent = `Last login: ${stamp} on ttys000`;
  }
})();

// Expand/collapse entries ONLY when [+] is clicked
document.querySelectorAll('.entry').forEach(entry => {
  const summary = entry.querySelector('summary');
  const button = entry.querySelector('.plus');

  if (!summary || !button) return;

  summary.addEventListener('click', e => {
    // Allow company links to work normally
    if (e.target.closest('a')) {
      return;
    }

    // Prevent other summary clicks from toggling the entry
    e.preventDefault();

    // Only toggle when [+] is clicked
    if (e.target.closest('.plus')) {
      entry.open = !entry.open;

      button.setAttribute('aria-expanded', entry.open);
      button.setAttribute(
        'aria-label',
        entry.open ? 'Collapse entry' : 'Expand entry'
      );
    }
  });
});

// Expand/collapse all entries within a section
document.querySelectorAll('.toggle-all').forEach(button => {
  const section = document.getElementById(button.dataset.target);
  const entries = section.querySelectorAll('.entry');

  function updateButton() {
    const allOpen = [...entries].every(entry => entry.open);

    button.textContent = allOpen ? '[collapse all]' : '[expand all]';
    button.setAttribute('aria-expanded', allOpen);
  }

  button.addEventListener('click', () => {
    const allOpen = [...entries].every(entry => entry.open);

    entries.forEach(entry => {
      entry.open = !allOpen;

      const plus = entry.querySelector('.plus');
      if (plus) {
        plus.setAttribute('aria-expanded', entry.open);
        plus.setAttribute(
          'aria-label',
          entry.open ? 'Collapse entry' : 'Expand entry'
        );
      }
    });

    updateButton();
  });

  entries.forEach(entry => {
    entry.addEventListener('toggle', updateButton);
  });

  updateButton();
});