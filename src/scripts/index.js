/* Desenvolva sua lógica aqui */
import { valuesCategory, insertedValues } from "./valuesData.js";
import {renderNewValue} from "./render.js";

let insertedValuesFiltered = [];

const valueFiltered = (array) => {
    const inputRadio = document.querySelectorAll('.input-option');

    inputRadio.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            insertedValuesFiltered = [];

            console.log(event.target.value)
            if (event.target.value == 1) {
                array.forEach((element) => {
                    if (element.categoryID == 0) {
                        insertedValuesFiltered.push(element)
                    }
                })
            } else if (event.target.value == 2) {
                array.forEach((element) => {
                    if (element.categoryID == 1) {
                        insertedValuesFiltered.push(element)
                    }
                })
            } else {
                insertedValuesFiltered = array
            }
            renderNewValue(insertedValuesFiltered, valuesCategory)
        })
    })
}
valueFiltered(insertedValues);

//somar valor e renderizar
export const renderFullValue = (array) => {
    const sumValue = document.querySelector('.sum-value');

    const sum = array.reduce((accumulator, element) => {
        return accumulator += Number(element.value)
    }, 0)
    sumValue.innerHTML = sum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });;
}
renderFullValue(insertedValuesFiltered)

export const changeList = (array) => {
    const nullContainer = document.querySelector('.null-container');
    
    if (array.length === 0) {
        nullContainer.style.display = 'flex';
    }
    else {
        nullContainer.style.display = 'none';
    }
}

//deletar o card
export const deleteValue = (array) => {
    const bttnDelete = document.querySelectorAll('.delete-value')

    bttnDelete.forEach(buttton => {
        buttton.addEventListener('click', (event) => {
            const valueId = Number(event.target.getAttribute('dataset'));

            const index = array.findIndex(value => {
                return value.id == valueId
            })
            const removeItem = array.splice(index, 1);
            renderNewValue(insertedValues)
            changeList(insertedValues)
            return removeItem
        })
    })
}

changeList(insertedValues)
renderNewValue(insertedValues)