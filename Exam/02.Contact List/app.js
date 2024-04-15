window.addEventListener("load", solve);

function solve() {
  const nameInputElement = document.getElementById('name');
  const phoneNumberInputElement = document.getElementById('phone');
  const categoryInputElement = document.querySelector('#category');
  const addButtonElement = document.getElementById('add-btn');
  const checkListElement = document.getElementById('check-list');
  const contactListElement = document.getElementById('contact-list');
  
  
  addButtonElement.addEventListener('click', () => {
    //get input info
    const name = nameInputElement.value;
    const phone = phoneNumberInputElement.value;
    const category = categoryInputElement.value;

    //create check-list element
    const checkLiElement = createCheckListElement(name, phone, category);

    //add to task list
    checkListElement.appendChild(checkLiElement);

    //clear input fields
    clearInput();

  });


  function createCheckListElement (name, phone, category) {
    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');

    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons');
    buttonsDivElement.appendChild(editButtonElement);
    buttonsDivElement.appendChild(saveButtonElement);

    const namePElement = document.createElement('p');
    namePElement.textContent = `name:${name}`;
    const phonePElement = document.createElement('p');
    phonePElement.textContent = `phone:${phone}`;
    const categoryPElement = document.createElement('p');
    categoryPElement.textContent = `category:${category}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(namePElement);
    articleElement.appendChild(phonePElement);
    articleElement.appendChild(categoryPElement);

    const checkLiElement = document.createElement('li');
    checkLiElement.appendChild(buttonsDivElement);
    checkLiElement.appendChild(articleElement);

    editButtonElement.addEventListener('click', () => {
      nameInputElement.value = name;
      phoneNumberInputElement.value = phone;
      categoryInputElement.value = category;

      checkLiElement.remove();
    });

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('del-btn');

    saveButtonElement.addEventListener('click', () => {
      buttonsDivElement.remove();
      checkLiElement.appendChild(deleteButtonElement);
      contactListElement.appendChild(checkLiElement);
    });

    deleteButtonElement.addEventListener('click', () => {
      checkLiElement.remove();
    });

    return checkLiElement;
  }

  function clearInput() {
    nameInputElement.value = '';
    phoneNumberInputElement.value = '';
    categoryInputElement.value = '';
  }
}
  