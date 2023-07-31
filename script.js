let rulesBtn = document.getElementById('toggleRulesBtn');
let rules = document.getElementById('rules');

function toggleRules() {
  if (rules.style.display === 'block') {
    rules.style.display = 'none';
    rulesBtn.innerHTML = 'Afficher les règles du jeu';
  } else {
    rules.style.display = 'block';
    rulesBtn.innerHTML = 'Cacher les règles du jeu';
  }
}

rulesBtn.onclick = toggleRules;