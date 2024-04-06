function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');
    const phonebookElement = document.getElementById('phonebook');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadButtonElement.addEventListener('click', () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(entry => {
                         const liElement = document.createElement('li');
                         liElement.textContent = `${entry.person}: ${entry.phone}`;

                         const deleteButton = document.createElement('button');
                         deleteButton.textContent = 'Delete';

                         liElement.appendChild(deleteButton);

                         phonebookElement.appendChild(liElement);
                    })
            })
    });

    btnCreateButtonElement.addEventListener('click', () => {
        const person = personElement.value;
        const phone = phoneElementElement.value;

        fetch(baseUrl, {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone,
            })
        })
            .then(res => {
                
                const liElement = createEntryElement({
                    person,
                    phone, 
                });
                
                        phonebookElement.appendChild(liElement);
                
                        personElement.value = '';
                        phoneElement.value = '';
            });

    });

    function createEntryElement(entry) {
        const liElement = document.createElement('li');
        liElement.textContent = `${entry.person}: ${entry.phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            fetch(`${baseUrl}`)
        });

        liElement.appendChild(deleteButton);

        return liElement;
    }
}

attachEvents();