
// Scrollbar cards

function scrollSlider(distancia){
    const slider = document.getElementById('projetos-card');
    slider.scrollBy({
        left: distancia,
        behavior: 'smooth'
    })
}