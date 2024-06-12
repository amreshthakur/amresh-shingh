document.getElementById('toggle-button').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const socialIcons = document.getElementById('social-icons');
    
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    socialIcons.style.display = (socialIcons.style.display === 'flex') ? 'none' : 'flex';
});
