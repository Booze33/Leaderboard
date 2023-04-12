import './style.css';

const gameName = 'My game';
const ApiKey = '1d1Kcgt6tjFXpA9MWYES';

// Render game function
const RenderGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: gameName,
    }),
  });
  const data = await response.json();
  const gameId = data.Id;

  return gameId;
};
const gameId = await RenderGame();

// refresh function
const refreshScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/', {
    headers: {
      Authorization: `Bearer ${ApiKey}`,
    },
  });
  const data = await response.json();

  let div = '';
  data.result.forEach((score) => {
    div += `<div>${score.user}: ${score.score}</div>`;
  });
  const display = document.querySelector('.display');
  display.innerHTML = div;
};

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshScores);

// submit function
const submitScore = async () => {
  const name = document.querySelector('.name').value.trim();
  const score = document.querySelector('.score').value;

  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!name || !nameRegex.test(name)) {
    return;
  }

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
      gameID: gameId,
    }),
  });

  const data = await response.json();
  data.className = 'this';
};

const submit = document.getElementById('submit');
submit.addEventListener('click', submitScore);
