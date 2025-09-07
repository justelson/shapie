// Random background picker for shape pages
(function () {
  const assets = [
    'assets/ball.png',
    'assets/big.jpg',
    'assets/boy.jpg',
    'assets/fog.jpg',
    'assets/small.png'
  ];

  function pickRandom() {
    return assets[Math.floor(Math.random() * assets.length)];
  }

  // Apply only on pages that have data-random-bg attribute on body
  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    if (!body.dataset.randomBg) return;

    const img = pickRandom();
    body.style.backgroundImage = `url('${img}')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';
  });
})();
