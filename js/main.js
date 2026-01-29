document.addEventListener("DOMContentLoaded", function () {

    // 1. Select Elements
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval; // Variable to store the auto-slide timer

    // 2. Function to Move the Slider
    function updateSlidePosition() {
        // Moves the track left by (Index * 100%)
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 3. Next Slide Logic
    function moveToNextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateSlidePosition();
    }

    // 4. Previous Slide Logic
    function moveToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Loop to the last slide
        }
        updateSlidePosition();
    }

    // 5. Auto-Slide Timer Logic
    function startAutoSlide() {
        // Run moveToNextSlide every 5000 milliseconds (5 seconds)
        slideInterval = setInterval(moveToNextSlide, 5000);
    }

    function resetTimer() {
        // Stop the current timer
        clearInterval(slideInterval);
        // Start a new one (so the user has 5 full seconds after clicking)
        startAutoSlide();
    }

    // 6. Event Listeners for Buttons
    nextBtn.addEventListener('click', () => {
        moveToNextSlide();
        resetTimer(); // Reset the auto-timer on click
    });

    prevBtn.addEventListener('click', () => {
        moveToPrevSlide();
        resetTimer(); // Reset the auto-timer on click
    });

    // 7. Initialize Auto-Slide on Page Load
    startAutoSlide();
});