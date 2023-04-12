import './style.css';

const gameName = 'My game';
const API_key = '1d1Kcgt6tjFXpA9MWYES';

// Render game function
const RenderGame = async () => {
  const response = await fetch ('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: gameName
    })
  })
  const data = await response.json();
  const gameId = data.Id;
  console.log('Game Created');
  return gameId;
}
const gameId = await RenderGame();

// refresh function
const refreshScores = async () => {
  const response = await fetch ('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/', {
    headers: {
      'Authorization': `Bearer ${API_key}`
    }
  })
  const data = await response.json();
  console.log('scores:', data);
  let div = '';
  data.result.forEach(score => {
  div += `<div>${score.user}: ${score.score}</div>`;
})
const display = document.querySelector('.display');
display.innerHTML = div;
}

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshScores);

// submit function
const submitScore = async () => {
  const name = document.querySelector('.name').value.trim();
  const score = document.querySelector('.score').value;

  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!name || !nameRegex.test(name)) {
    console.error('Invalid user name');
    return;
  }

  const response = await fetch ('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${API_key}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: name,
        score: score,
        gameID: gameId
    })
  });

  const data = await response.json();
  console.log('score saved:', data);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', submitScore);
