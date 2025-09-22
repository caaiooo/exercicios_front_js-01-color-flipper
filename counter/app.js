// 
let count = 0;

// 
const value = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

//
function updateDisplay() {
  value.textContent = count;

  //
  if (count > 0) {
    value.style.color = 'var(--clr-green-dark)';
  } else if (count < 0) {
    value.style.color = 'var(--clr-red-dark)';
  } else {
    value.style.color = 'var(--clr-black)';
  }
}

// 
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

//
updateDisplay();
