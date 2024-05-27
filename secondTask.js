document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.background = getRandomColor();
  });

  function getRandomColor() {
    const letters = '0123456789ABCDED';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*10)];
    }
    return color;
  }