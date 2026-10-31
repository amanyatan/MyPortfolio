document.addEventListener('DOMContentLoaded', () => {
  // Marvel Flashing Effect for Name
  const marvelName = document.getElementById('marvelName');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$';
  const originalText = 'AMAN NITHAN';
  let iterations = 0;

  const interval = setInterval(() => {
    marvelName.innerText = originalText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iterations) return originalText[index];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 30);
});

function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const thankYou = document.getElementById('thankYou');
  form.style.display = 'none';
  thankYou.classList.remove('hidden');
}