import { valuesCategory, insertedValues } from "./valuesData.js";
import { renderFullValue, deleteValue, changeList } from "./index.js";

//capturar os valores
export const captureNewValue = (array) => {
    const id = array.length + 1;
    const valueMoney = document.querySelector('.modal-input');
    const category = document.querySelector(".input-dialog");
    const sendButton = document.querySelector('.bttn-send')

    sendButton.addEventListener('click', () => {
        let newObj = {
            id,
            value: valueMoney.value,
            categoryID: category.value
        };
        array.push(newObj);
        renderNewValue(array, valuesCategory)
    })
}
captureNewValue(insertedValues)

//criar card e fazer aparecer
export const renderNewValue = (array) => {
    const mainList = document.querySelector('#mainList');

    mainList.innerHTML = '';

    array.forEach((insertedValues) => {
        const card = createNewValue(insertedValues, valuesCategory);
        mainList.append(card)
    })
    deleteValue(insertedValues);
    renderFullValue(array)
    changeList(insertedValues)
}

export const createNewValue = (array, category) => {
    const li = document.createElement('li');
    const valueP = document.createElement('p');
    const div = document.createElement('div');
    const typeP = document.createElement('p');
    const bttn = document.createElement('button');
    const deleteImg = document.createElement('img');

    //inserir classes
    li.classList.add('value-li');
    valueP.classList.add('value-num');
    div.classList.add('div-close');
    typeP.classList.add('value-type');
    bttn.classList.add('delete-bttn');
    deleteImg.classList.add('delete-value');
    deleteImg.setAttribute('dataset', array.id);
    //inserir valores
    valueP.innerText = `R$ ${array.value}`;
    typeP.innerHTML = category[array.categoryID];
    deleteImg.src = './src/assets/trash.svg';

    //appends

    bttn.appendChild(deleteImg);
    div.append(typeP, bttn);
    li.append(valueP, div);
    return li
}
