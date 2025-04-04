const img = document.querySelectorAll('.img-element');
const description = document.querySelectorAll('.description');
const sobre = document.querySelectorAll('.Sobre-content');
const projetos = document.querySelectorAll('.projetos');
const contato = document.querySelectorAll('.contato');


const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('visivel')
        }else{
            entry.target.classList.remove('visivel')
        }
    });
}, {threshold: 0.1});


contato.forEach(el =>observer.observe(el))
projetos.forEach(el =>observer.observe(el))
sobre.forEach(el =>observer.observe(el))
description.forEach(el =>observer.observe(el))
img.forEach(el =>observer.observe(el));

// Scrollbar cards

function scrollSlider(distancia){
    const slider = document.getElementById('projetos-card');
    slider.scrollBy({
        left: distancia,
        behavior: 'smooth'
    })
}