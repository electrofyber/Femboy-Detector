const detectBtn = document.getElementById('detectBtn');
const nameInput = document.getElementById('nameInput');
const resultBox = document.getElementById('resultBox');
const resultText = document.getElementById('resultText');

const yesTemplates = [
  (name) => `${name}, you ARE a femboy.`,
  (name) => `Femboy detected: ${name}. ✓`,
  (name) => `Verdict: ${name} is a femboy.`,
  (name) => `Yes. ${name}, you're a femboy.`,
];

const noTemplates = [
  (name) => `${name}, you are NOT a femboy.`,
  (name) => `No femboy detected (${name}).`,
  (name) => `Verdict: ${name} is not a femboy.`,
  (name) => `Nope. ${name} is not a femboy.`,
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const GITHUB_URL = 'https://github.com/electrofyber/Femboy-Detector';
const ELECTROFYBER_URL = 'https://electrofyber.cfd';

detectBtn.addEventListener('click', () => {
  const rawName = nameInput ? nameInput.value.trim() : '';
  const name = rawName || 'You';

  if (!rawName) {
    resultBox.classList.remove('empty', 'yes', 'no');
    resultBox.classList.add('empty');
    resultText.textContent = 'Enter your name above first.';
    resultText.className = '';
    return;
  }

  const isFemboy = Math.random() >= 0.5;
  const template = isFemboy ? getRandomItem(yesTemplates) : getRandomItem(noTemplates);
  const message = template(name);

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
