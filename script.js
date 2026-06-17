const cursor = document.querySelector('.cursor-postmark');
window.addEventListener('mousemove', (e) => {
  cursor.style.opacity = '1';
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const cards = document.querySelectorAll('.invite-card, .location, .option');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.animate([
      {opacity:0, transform:'translateY(26px)'},
      {opacity:1, transform:'translateY(0)'}
    ],{duration:700, easing:'cubic-bezier(.2,.8,.2,1)', fill:'both'}); observer.unobserve(entry.target); }
  })
},{threshold:.15});
cards.forEach(card=>observer.observe(card));
