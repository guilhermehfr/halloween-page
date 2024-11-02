// Função para criar uma nova folha estilizada usando SVG
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Array com diferentes SVGs de folhas
    const leafSVGs = [
        `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="${getRandomColor()}" d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2Z"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="${getRandomColor()}" d="M12 2C10.67 2 9.5 3.21 9.5 4.5C9.5 5.8 12 9 12 9C12 9 14.5 5.8 14.5 4.5C14.5 3.21 13.33 2 12 2Z"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="${getRandomColor()}" d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2Z"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="${getRandomColor()}" d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2Z"/></svg>`
    ];
    
    // Escolhe um SVG aleatório
    const randomLeafSVG = leafSVGs[Math.floor(Math.random() * leafSVGs.length)];
    leaf.innerHTML = randomLeafSVG;

    // Posição e animação aleatórias
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 5 + 5 + 's';
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Adiciona a folha ao body
    document.body.appendChild(leaf);

    // Remove a folha após a animação
    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

// Função para escolher uma cor de folha aleatória
function getRandomColor() {
    const colors = ["#FF6347", "#FFA500", "#FFD700", "#FFA550", "#FF4500"]; // cores mais vibrantes
    return colors[Math.floor(Math.random() * colors.length)];
}

// Cria folhas em intervalos regulares
setInterval(createLeaf, 1200);
