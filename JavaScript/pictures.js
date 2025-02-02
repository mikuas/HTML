function changeImage(newSrc) {
    const imageWrapper = document.getElementById('imageWrapper');
    const currentImage = document.getElementById('currentImage');
    const nextImage = document.getElementById('nextImage');

    // ID ^^^

    // Set the new image source
    nextImage.src = newSrc;

    // Start the sliding transition
    imageWrapper.style.transform = 'translateX(-100%)';

    // After the transition, reset the positions and sources
    nextImage.onload = () => {
        setTimeout(() => {
            currentImage.src = newSrc;
            imageWrapper.style.transition = 'none';
            imageWrapper.style.transform = 'translateX(0)';
            setTimeout(() => {
                imageWrapper.style.transition = 'transform 1s ease-in-out';
            }, 10); // Small delay to allow the DOM to reset
        }, 1000); // Match this to the transition duration
    };
}