function calculate() {
  const area = parseFloat(document.getElementById('area').value) || 0;
  const rateNoVat = parseFloat(document.getElementById('rateNoVat').value) || 0;
  const rateWithVat = parseFloat(document.getElementById('rateWithVat').value) || 0;

  const rentWithVat = area * rateWithVat;
  const rentNoVat = area * rateNoVat;
  const opsCost = area * 500;

  document.getElementById('withVat').innerText = rentWithVat.toLocaleString('ru-RU');
  document.getElementById('noVat').innerText = rentNoVat.toLocaleString('ru-RU');
  document.getElementById('ops').innerText = opsCost.toLocaleString('ru-RU');
}
