/* Ekspanderer terminal-window/ rød-knapp */

document.getElementById('resize-btn').addEventListener('click', function() {
  const terminal = document.getElementById('terminal');
  // Toggle mellom large og normal størrelse
  terminal.classList.toggle('large');
});


