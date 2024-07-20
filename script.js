function openEnvelope() {
    document.querySelector('.envelope').style.transform = 'rotateY(180deg)';
    document.querySelector('.envelope-cover').style.transform = 'rotateX(180deg)';
    document.querySelector('.message').style.transform = 'translateY(0)';
}
