(function() {
  var bgImgs = [
    "https://s2.loli.net/2026/02/02/SonKQhMuePZm291.jpg",
    "https://box.leak.moe/Sana/10.png",
    "https://box.leak.moe/Sana/117847824_p0.jpg",
    "https://box.leak.moe/Sana/1431.png",
    "https://box.leak.moe/Sana/1763724124403.jpeg",
    "https://box.leak.moe/Sana/24.png",
    "https://box.leak.moe/Sana/456457.png",
    "https://box.leak.moe/Sana/6.png",
    "https://box.leak.moe/Sana/72114086_p0.png",
    "https://box.leak.moe/Sana/9.png",
    "https://box.leak.moe/Sana/Sana.png",
    "https://box.leak.moe/Sana/q35r.png",
    "https://box.leak.moe/Sana/v2-20efeaba5c48ed05fac7c759d87be0d9_1440w.png",
    "https://box.leak.moe/Sana/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-22%20224641.png",
    "https://box.leak.moe/Sana/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-24%20010648.png",
    "https://box.leak.moe/Sana/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-28%20233647.png",
    "https://box.leak.moe/Sana/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-10-31%20163143.png",
    "https://box.leak.moe/Sana/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-01-11%20033855.png",
    "https://box.leak.moe/Sana/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-06-06%20225604.png"
  ];

  function changeHeroBg() {
    var randomBg = bgImgs[Math.floor(Math.random() * bgImgs.length)];
    var hero = document.querySelector('.hero') || document.querySelector('.hero-section') || document.getElementById('hero');
    if (hero) {
      hero.style.setProperty('background-image', 'url(' + randomBg + ')', 'important');
      hero.style.setProperty('background-size', 'cover', 'important');
      hero.style.setProperty('background-position', 'center center', 'important');
      hero.style.setProperty('background-repeat', 'no-repeat', 'important');
    }
  }

  document.addEventListener('DOMContentLoaded', changeHeroBg);
  document.addEventListener('pjax:complete', changeHeroBg);
  changeHeroBg();
})();