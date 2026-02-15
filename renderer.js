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

const GITHUB_URL = 'https://github.com/electrofyber/Femboy-Detector';
const ELECTROFYBER_URL = 'https://electrofyber.cfd';

detectBtn.addEventListener('click', () => {
  const isFemboy = Math.random() >= 0.5;
  const message = isFemboy ? getRandomItem(yesMessages) : getRandomItem(noMessages);

  resultBox.classList.remove('empty', 'yes', 'no');
  resultBox.classList.add(isFemboy ? 'yes' : 'no');
  resultText.textContent = message;
  resultText.className = 'result-text';
});

const helpLink = document.getElementById('helpLink');
if (helpLink && typeof window.openExternal === 'function') {
  helpLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.openExternal(GITHUB_URL);
  });
} else if (helpLink) {
  helpLink.href = GITHUB_URL;
  helpLink.target = '_blank';
}

const creditsLink = document.getElementById('creditsLink');
if (creditsLink && typeof window.openCredits === 'function') {
  creditsLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.openCredits();
  });
} else if (creditsLink) {
  creditsLink.href = 'credits.html';
  creditsLink.target = '_blank';
}

const electrofyberLink = document.getElementById('electrofyberLink');
if (electrofyberLink && typeof window.openExternal === 'function') {
  electrofyberLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.openExternal(ELECTROFYBER_URL);
  });
} else if (electrofyberLink) {
  electrofyberLink.href = ELECTROFYBER_URL;
  electrofyberLink.target = '_blank';
}
