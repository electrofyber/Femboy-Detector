const detectBtn = document.getElementById('detectBtn');
const resultBox = document.getElementById('resultBox');
const resultText = document.getElementById('resultText');

const yesMessages = [
  'You ARE a femboy.',
  'Femboy detected. ✓',
  'Verdict: Femboy.',
  "Yes. You're a femboy.",
];

const noMessages = [
  'You are NOT a femboy.',
  'No femboy detected.',
  'Verdict: Not a femboy.',
  'Nope. Not a femboy.',
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

detectBtn.addEventListener('click', () => {
  const isFemboy = Math.random() >= 0.5;
  const message = isFemboy ? getRandomItem(yesMessages) : getRandomItem(noMessages);

  resultBox.classList.remove('empty', 'yes', 'no');
  resultBox.classList.add(isFemboy ? 'yes' : 'no');
  resultText.textContent = message;
  resultText.className = 'result-text';
});
