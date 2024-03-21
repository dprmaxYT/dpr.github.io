// Obtener el canvas y su contexto
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Configuración de las gotas de lluvia
const numDrops = 50; // Número de gotas
const dropSpeed = 5; // Velocidad de caída

// Crear un array para almacenar las gotas
const drops = [];

// Inicializar las gotas
for (let i = 0; i < numDrops; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.8 + 0.5, // Tamaño variable entre 1 y 3
        speed: dropSpeed
    });
}

// Función para dibujar las gotas
function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const drop of drops) {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2, true); // Dibujar un círculo
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Color blanco con opacidad
        ctx.fill();

        // Actualizar la posición de la gota
        drop.y += drop.speed;

        // Reiniciar la posición si la gota sale de la pantalla
        if (drop.y > canvas.height) {
            drop.y = -drop.size;
        }
    }

    requestAnimationFrame(drawRain);
}

// Iniciar la animación
drawRain();

