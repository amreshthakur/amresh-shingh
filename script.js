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


// ----------------------------- object catogery 
const categories = document.querySelectorAll('.category');
const products = document.querySelectorAll('.product');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryType = category.getAttribute('data-category');

        // Hide all products
        products.forEach(product => {
            product.style.display = 'none';
        });

        // Show products that match the selected category
        products.forEach(product => {
            if (product.getAttribute('data-category') === categoryType) {
                product.style.display = 'block';
            }
        });
    });
});
// ----------------------------- object catogery 


// frequency answer
function toggleFAQ(element) {
    const faqItem = element.parentNode;
    faqItem.classList.toggle('active');
};

// frequency answer