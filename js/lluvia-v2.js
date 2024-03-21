// Obtener el canvas y su contexto
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Configuración de las gotas de lluvia
const numDrops = 50; // Número de gotas
const dropSpeed = 1; // Velocidad de caída

// Crear un array para almacenar las gotas
const drops = [];

// Cargar la imagen
const img = new Image();
img.src = '../img/gota.png'; // Cambia esto por la ruta a tu imagen

img.onload = function() {
    // Inicializar las gotas
    for (let i = 0; i < numDrops; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 0.0005 + 0.0001, // Tamaño variable entre 0.5 y 1.5
            speed: dropSpeed
        });
    }

    // Función para dibujar las gotas
    function drawRain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const drop of drops) {
            ctx.drawImage(img, drop.x, drop.y, img.width * drop.size, img.height * drop.size);

            // Actualizar la posición de la gota
            drop.y += drop.speed;

            // Reiniciar la posición si la gota sale de la pantalla
            if (drop.y > canvas.height) {
                drop.y = -img.height * drop.size;
            }
        }

        requestAnimationFrame(drawRain);
    }

    // Iniciar la animación
    drawRain();
}
