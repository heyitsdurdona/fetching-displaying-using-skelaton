import { elLoader, elTemp } from "./html-elements.js";

export function uiRender(data) {
    console.log(data);
    elLoader.innerHTML = '';
    data.forEach(item => {
        const card = elTemp.content.cloneNode(true);
        
        const title = card.querySelector('.card-title');
        const description = card.querySelector('p');
        const price = card.querySelector('#price');
        
        title.textContent = item.name;
        description.textContent = item.description;
        price.textContent = item.price || item.age;
        
        elLoader.appendChild(card);
    });     
}