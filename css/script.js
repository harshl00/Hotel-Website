const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let currentImage = 0;

    setInterval(() => {
        images[currentImage].style.display = 'none';
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.display = 'block';
    }, 3000);
});


