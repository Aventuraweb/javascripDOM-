document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const name = document.getElementById('name').value;
        const apellido = document.getElementById('apellido').value;
        const message = document.getElementById('message').value;

        // Guardar los datos en Local Storage
        localStorage.setItem('name', name);
        localStorage.setItem('apellido', apellido);
        localStorage.setItem('message', message);

        alert('Datos guardados en Local Storage');
    });
});
