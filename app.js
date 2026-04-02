  const cInput = document.getElementById('celsius');
  const fInput = document.getElementById('fahrenheit');

  cInput.addEventListener('input', () => {
    const c = parseFloat(cInput.value);
    fInput.value = isNaN(c) ? '' : +((c * 9/5) + 32).toFixed(4);
  });

  fInput.addEventListener('input', () => {
    const f = parseFloat(fInput.value);
    cInput.value = isNaN(f) ? '' : +((f - 32) * 5/9).toFixed(4);
  });

const resetBtn = document.querySelector('.btn-reset');

resetBtn.addEventListener('click', () => {
  cInput.value = '';
  fInput.value = '';
  cInput.focus();
});