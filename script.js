document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const backBtns = document.querySelectorAll('.back-btn');
    const sections = document.querySelectorAll('.section');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to switch to a section
    function showSection(sectionId) {
        // Hide Intro
        intro.style.display = 'none';
        mainContent.style.display = 'block';

        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active'));

        // Show target section
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');
        }
    }

    // Function to go back to intro
    function showIntro() {
        mainContent.style.display = 'none';
        intro.style.display = 'flex';
        
        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active'));
    }

    // Event Listeners for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Event Listeners for Back Buttons
    backBtns.forEach(btn => {
        btn.addEventListener('click', showIntro);
    });

    // Modal Functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = item.src;
            captionText.innerHTML = item.alt;
        });
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close modal if clicking outside image
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});