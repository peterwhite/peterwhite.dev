const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check if the user has a dark mode preference saved in local storage
const savedPreference = localStorage.getItem('darkMode');
if (savedPreference === 'true') {
  document.querySelector('html')?.classList.add('dark');
} else if (savedPreference === 'false') {
  document.querySelector('html')?.classList.remove('dark');
} else {
  // If no preference is saved, use the system preference
  if (prefersDark.matches) {
    document.querySelector('html')?.classList.add('dark');
  }
}

// If user changes dark mode, override preference

prefersDark.addEventListener('change', (event) => {
  const html = document.querySelector('html');
  if (event.matches) {
    html?.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    html?.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
});
