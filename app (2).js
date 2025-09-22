// Counter functionality
let count = 0;

// Get elements
const value = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

// Update display
function updateDisplay() {
  value.textContent = count;

  // Change color based on count
  if (count > 0) {
    value.style.color = 'var(--clr-green-dark)';
  } else if (count < 0) {
    value.style.color = 'var(--clr-red-dark)';
  } else {
    value.style.color = 'var(--clr-black)';
  }
}

// Event listeners
decreaseBtn.addEventListener('click', function() {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', function() {
  count = 0;
  updateDisplay();
});

increaseBtn.addEventListener('click', function() {
  count++;
  updateDisplay();
});

// Initialize display
updateDisplay();
