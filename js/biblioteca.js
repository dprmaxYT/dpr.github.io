document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos con clase "folder"
    var folders = document.querySelectorAll('.folder');

    // Agregar event listeners para cada elemento "folder"
    folders.forEach(function(folder) {
        // Agregar evento de clic para expandir o contraer
        folder.querySelector('.name').addEventListener('click', function() {
            folder.classList.toggle('collapsed');
            var icon = folder.querySelector('.expand-icon');
            icon.classList.toggle('collapse-icon');
        });

        // Agregar evento de clic para los archivos
        var files = folder.querySelectorAll('.file');
        files.forEach(function(file) {
            file.addEventListener('click', function() {
                // Llamar a la función JavaScript definida por el usuario
                // Por ejemplo:
                // miFuncionPersonalizada();
            });
        });
    });
});
