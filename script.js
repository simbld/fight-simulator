let welcome = document.getElementById('welcome');
let enter = document.getElementById('enter');
let img = document.getElementById('welcomeImg');
let choose = document.getElementById('chooseCharacter');
let pseudo = document.getElementById('pseudo');
let rulesBtn = document.getElementById('toggleRulesBtn');
let rules = document.getElementById('rules');
let wizard = document.getElementById('wizardCharacter');
let warrior = document.getElementById('warriorCharacter');

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