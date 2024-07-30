document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');
    const nav = document.createElement('nav');
    nav.className = 'menu';

    const button = document.createElement('button');
    button.className = 'menu-toggle';
    button.setAttribute('aria-label', 'Toggle menu');

    const img = document.createElement('img');
    img.src = '/imagenes/icons8-hamburguesa-100.png';
    img.alt = 'hamburguesa';

    const menuLinks = document.createElement('div');
    menuLinks.className = 'menu-links';

    const links = ['Home', 'Contact', 'Support'];
    links.forEach(text => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        menuLinks.appendChild(a);
    });

    button.appendChild(img);
    nav.appendChild(button);
    nav.appendChild(menuLinks);
    menuContainer.appendChild(nav);

    const titulo = document.createElement('h1'); 
    titulo.className = 'titulo'; 
    titulo.textContent = 'Constelaciones'; 
    menuContainer.appendChild(titulo); 

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const primerImg = document.createElement('img'); 
    primerImg.src = '/imagenes/generated.webp'; 
    primerImg.alt = 'constelación'; 
    primerImg.className = 'imagen'; 
    
    const segdaImg = document.createElement('img'); 
    segdaImg.src = '/imagenes/colorful.webp'; 
    segdaImg.alt = 'constelación'; 
    segdaImg.className = 'imagen'; 

    imgContainer.appendChild(primerImg);
    imgContainer.appendChild(segdaImg);

    menuContainer.appendChild(imgContainer);

    const texto = document.createElement('p'); 
    texto.className = 'texto'; 
    texto.textContent = 'En la noche llena de estrellas hay más ternura infinita que en todos los corazones humanos.'; 
    menuContainer.appendChild(texto); 

    const botonContainer = document.createElement('div');
    botonContainer.className = 'boton-container';

    const botonFinal = document.createElement('button');
    botonFinal.textContent = 'Fin de la constelación';
    botonFinal.className = 'boton'; 

    botonContainer.appendChild(botonFinal);
    menuContainer.appendChild(botonContainer); 

    button.addEventListener('click', function() {
        menuLinks.classList.toggle('show');
    });
});
