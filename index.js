// Створення блоку кнопок з посиланнями на Uniswap
function createUniswapButtons() {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';
    container.style.gap = '10px';
  
    for (let i = 0; i < 15; i++) {
      const link = document.createElement('a');
      link.href = 'https://uniswap.org/';
      link.target = '_blank';
      link.style.textDecoration = 'none';
  
      const button = document.createElement('button');
      button.textContent = 'UNISWAP';
      button.style.padding = '16px 40px';
      button.style.margin = '8px';
      button.style.fontWeight = 'bold';
      button.style.border = '2px solid black';
      button.style.borderRadius = '25px';
      button.style.backgroundColor = 'white';
      button.style.boxShadow = '2px 4px 0px 0px black';
      button.style.cursor = 'pointer';
      button.style.display = 'flex';
      button.style.alignItems = 'center';
      button.style.gap = '10px';
  
      const img = document.createElement('img');
      img.src = 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=033';
      img.alt = 'Uniswap';
      img.style.height = '40px';
  
      button.prepend(img);
      link.appendChild(button);
      container.appendChild(link);
    }
  
    document.body.appendChild(container);
  }
  
  // Виклик функції для створення кнопок
  window.onload = createUniswapButtons;
  