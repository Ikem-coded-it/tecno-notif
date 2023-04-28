function animate() {
    const triggerBtn = document.getElementById('triger-btn');
    const animationSection = document.getElementsByClassName('section-2')[0];
    const bellIcon = document.getElementById('bell');
    const eyeIcon = document.getElementById('eye');
    const simIcon = document.getElementById('sim');

    triggerBtn.addEventListener('click', () => {
        animationSection.classList.toggle('section-2-animate');
        bellIcon.classList.toggle('bell-animate')
        eyeIcon.classList.toggle('eye-animate')
        simIcon.classList.toggle('sim-animate')
    })
}

animate()