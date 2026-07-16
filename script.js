// Kimberly Perkins — static site behavior
document.addEventListener('DOMContentLoaded', () => {

  // ---- Nav scroll state ----
  const nav = document.getElementById('site-nav');
  function onScroll() {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(246,247,250,0.95)';
      nav.style.boxShadow = '0 1px 0 oklch(88% 0.01 247)';
    } else {
      nav.style.background = 'transparent';
      nav.style.boxShadow = 'none';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Hero typewriter ----
  const fullText = "Hi, I'm Kimberly.";
  const typedEl = document.getElementById('typed-text');
  let typedChars = 0;
  let typeInterval = null;

  function startTyping() {
    typeInterval = setInterval(() => {
      typedChars++;
      typedEl.textContent = fullText.slice(0, typedChars);
      if (typedChars >= fullText.length) {
        clearInterval(typeInterval);
        setTimeout(startErasing, 1800);
      }
    }, 60);
  }

  function startErasing() {
    typeInterval = setInterval(() => {
      typedChars--;
      typedEl.textContent = fullText.slice(0, typedChars);
      if (typedChars <= 0) {
        clearInterval(typeInterval);
        setTimeout(startTyping, 500);
      }
    }, 35);
  }

  setTimeout(startTyping, 700);

  // ---- Contact form -> mailto ----
  const form = document.getElementById('contact-form');
  const formWrap = document.getElementById('contact-form-wrap');
  const thankYou = document.getElementById('thankyou-box');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('msg').value;

    const subject = encodeURIComponent(`Website inquiry from ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent(`${message}

— ${firstName} ${lastName} (${email})`);
    window.location.href = `mailto:pilot@uw.edu?subject=${subject}&body=${body}`;

    formWrap.style.display = 'none';
    thankYou.style.display = 'block';
  });

});
