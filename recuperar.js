document.addEventListener('DOMContentLoaded', function() {
    const savedDataDiv = document.getElementById('savedData');

    // Recuperar los datos del Local Storage
    const name = localStorage.getItem('name');
    const apellido = localStorage.getItem('apellido');
    const message = localStorage.getItem('message');

    if (name && apellido && message) {
        savedDataDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
        `;
    } else {
        savedDataDiv.innerHTML = '<p>No hay datos guardados.</p>';
    }
});
