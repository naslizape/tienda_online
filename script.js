// Funcionalidad para el carrito
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const buttons = document.querySelectorAll('.product button');

// Agregar evento de clic a los botones de los productos
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));

        // Agregar producto al carrito
        cart.push({ product, price });

        // Actualizar la vista del carrito
        updateCart();
    });
});

// Función para actualizar el carrito
function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toLocaleString()} COP`;
        
        // Crear botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.style.marginLeft = '10px';
        removeButton.addEventListener('click', () => {
            removeItemFromCart(index);
        });

        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);

        total += item.price;
    });

    cartCountElement.textContent = cart.length;
    cartTotalElement.textContent = total.toLocaleString();
}

// Función para eliminar un item del carrito
function removeItemFromCart(index) {
    cart.splice(index, 1); // Eliminar el producto del carrito
    updateCart(); // Actualizar el carrito
}

// Navegación entre secciones
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace
        const sectionId = this.getAttribute('href');

        // Ocultar todas las secciones
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección correspondiente
        document.querySelector(sectionId).classList.add('active');
    });
});
