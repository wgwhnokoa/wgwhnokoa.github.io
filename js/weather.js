/* themes/magzine/source/js/weather.js */

document.addEventListener('DOMContentLoaded', function () {

  let canvas = null;
  let ctx = null;
  let particles = [];
  let animationId = null;

  function createCanvas() {
    canvas = document.createElement('canvas');
    canvas.id = 'sana-weather-canvas';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');

    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 2147483647;
    `;
  }

  function destroyCanvas() {
    if (animationId) cancelAnimationFrame(animationId);
    animationId = null;
    particles = [];

    if (canvas) {
      canvas.remove();
      canvas = null;
      ctx = null;
    }
  }

  function createParticles(type) {
    particles = [];
    const count = type === 'snow' ? 120 : 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: type === 'snow' ? Math.random() * 3 + 1 : Math.random() * 2 + 1,
        speedY: type === 'snow' ? Math.random() * 1 + 0.5 : Math.random() * 1.5 + 0.8,
        speedX: Math.random() * 0.5 - 0.25,
      });
    }
  }

  function draw(type) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = type === 'snow'
      ? 'rgba(255,255,255,0.8)'
      : 'rgba(255,183,197,0.8)';

    hints: particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y > window.innerHeight) {
        p.y = -10;
        p.x = Math.random() * window.innerWidth;
      }
    });

    animationId = requestAnimationFrame(() => draw(type));
  }

  function applyEffect() {
    const enabled = localStorage.getItem('sanaEffectEnabled') !== 'false';
    const isDark = document.documentElement.classList.contains('dark-mode');

    destroyCanvas();
    if (!enabled) return;

    createCanvas();
    createParticles(isDark ? 'snow' : 'sakura');
    draw(isDark ? 'snow' : 'sakura');
  }

  // 监听昼夜模式
  const observer = new MutationObserver(applyEffect);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });

  // 监听开关
  document.body.addEventListener('change', e => {
    if (e.target.id === 'sana-effect-toggle') {
      localStorage.setItem('sanaEffectEnabled', e.target.checked);
      applyEffect();
    }
  });

  window.addEventListener('resize', () => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });

  setTimeout(applyEffect, 500);
});
