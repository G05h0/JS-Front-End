const baseUrl = 'http://localhost:3030/jsonstore/games/';

const loadButtonElement = document.getElementById('load-games');
const addGameButtonElement = document.getElementById('add-game');
const editGameButtonElement = document.getElementById('edit-game');
const gameNameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
const gameListElement = document.getElementById('games-list');

const loadGames = async () => {
    //fetch all meals
    const response = await fetch(baseUrl);
    const data = await response.json();

    //clear meal list element
    gameListElement.innerHTML = '';

    for (const game of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn')
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';

        const buttonsDivContainer = document.createElement('div');
        buttonsDivContainer.classList.add('buttons-container');
        buttonsDivContainer.appendChild(changeButtonElement);
        buttonsDivContainer.appendChild(deleteButtonElement);

        const namePElement = document.createElement('p');
        namePElement.textContent = game.name;
        const typePElement = document.createElement('p');
        typePElement.textContent = game.type;
        const playersPElement = document.createElement('p');
        playersPElement.textContent = game.players;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        contentDiv.appendChild(namePElement);
        contentDiv.appendChild(typePElement);
        contentDiv.appendChild(playersPElement);

        const boardgameDivElement = document.createElement('div');
        boardgameDivElement.classList.add('board-game');
        boardgameDivElement.appendChild(contentDiv);
        boardgameDivElement.appendChild(buttonsDivContainer);

        gameListElement.appendChild(boardgameDivElement);

        changeButtonElement.addEventListener('click', () => {
            boardgameDivElement.setAttribute('data-id', game._id);

            gameNameInputElement.value = game.name;
            typeInputElement.value = game.type;
            playersInputElement.value = game.players;

            editGameButtonElement.removeAttribute('disabled');

            addGameButtonElement.setAttribute('disabled', 'disabled');

            boardgameDivElement.remove();
        });

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${game._id}`, {
                method: 'DELETE'
            });

            // remove from list
            boardgameDivElement.remove();  
        });
    }
}

loadButtonElement.addEventListener('click', loadGames);

editGameButtonElement.addEventListener('click', async () => {
    //get data from inputs
    const {name, type, players} = getInputData();

    //get game id
    const gameId = boardgameDivElement.getAttribute('data-id');

    //make put request
    fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id: gameId,
            name,
            type,
            players,
        }),
    })
    
    gameListElement.appendChild(boardgameDivElement);
    //deactiate edit button
    editGameButtonElement.setAttribute('disabled', 'disabled');

    //activate add button
    addGameButtonElement.removeAttribute('disabled');
    
    clearInputData();

    loadGames();
});

addGameButtonElement.addEventListener('click', async () => {
    //get input
    const newGame = getInputData();

    //create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newGame),
    });

    if (!response.ok) {
        return;
    }

    //clear input fields
    clearInputData();
    //load all meals
    await loadGames();
});

function getInputData() {
    const name = gameNameInputElement.value;
    const type = typeInputElement.value;
    const players = playersInputElement.value;

    return { name, type, players };
}

function clearInputData() {
    gameNameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}