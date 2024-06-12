document.getElementById('toggle-button').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const socialIcons = document.getElementById('social-icons');
    
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    socialIcons.style.display = (socialIcons.style.display === 'flex') ? 'none' : 'flex';
});


// -----------------------------scroll of Our Valuable Clients --------------------
const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');

// Clone the content
// const clone = scrollContent.cloneNode(true);
// scrollContainer.appendChild(clone);
// -----------------------------scroll of Our Valuable Clients end code --------------------
