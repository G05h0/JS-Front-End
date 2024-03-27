function create(words) {
   const contentElement = document.getElementById('content');

   divElements = words 
      .map(word => {    
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';
         
         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

         return divElement;
      });

      divElements
         .forEach(divElement => {
         divElement.addEventListener('click', () => {
            const pElement = divElement.querySelector('p');
            pElement.style.display = 'block';
         })
      });

      //contentElement.append(...divElements);
      divElements.forEach(divElement => contentElement.appendChild(divElement));

}