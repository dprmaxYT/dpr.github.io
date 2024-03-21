        // Obtener el canvas y su contexto
        const canvas = document.getElementById('rainCanvas');
        const ctx = canvas.getContext('2d');

        // Configuración de las gotas de lluvia
        const numDrops = 50; // Número de gotas
        const dropSpeed = 1; // Velocidad de caída
        const dropLength = 2; // Longitud de las gotas

        // Crear un array para almacenar las gotas
        const drops = [];

        // Inicializar las gotas
        for (let i = 0; i < numDrops; i++) {
            drops.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: dropLength,
                speed: dropSpeed
            });
        }

        // Función para dibujar las gotas
        function drawRain() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const drop of drops) {
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x, drop.y + drop.length);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Color azul con opacidad
                ctx.stroke();

                // Actualizar la posición de la gota
                drop.y += drop.speed;

                // Reiniciar la posición si la gota sale de la pantalla
                if (drop.y > canvas.height) {
                    drop.y = -drop.length;
                }
            }

            requestAnimationFrame(drawRain);
        }

        // Iniciar la animación
        drawRain();