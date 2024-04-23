// Color button selection
const colorButtons = document.querySelectorAll('.color-button');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        colorButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Size button selection
const sizeButtons = document.querySelectorAll('.size-button');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Quantity buttons
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const quantityValue = document.querySelector('.quantity-value');

let quantity = 1;

decrementButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});

incrementButton.addEventListener('click', () => {
    quantity++;
    quantityValue.textContent = quantity;
});