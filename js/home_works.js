const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const gmailRegex = /^[a-zA-Z0-9][a-zA-Z0-9.]{4,28}[a-zA-Z0-9]@gmail\.com$/
 
gmailButton.onclick = (event) => {
    event.preventDefault()
 
    const value = gmailInput.value.trim()
 
    if (gmailRegex.test(value)) {
        gmailResult.textContent = 'Почта валидна'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.textContent = 'Почта невалидна'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
 
const moveChildBlock = (positionX = 0, positionY = 0) => {
    const step = 1
    const maxRight = parentBlock.clientWidth - childBlock.offsetWidth
    const maxDown = parentBlock.clientHeight - childBlock.offsetHeight

    if (positionX >= maxRight && positionY >= maxDown) {
        childBlock.style.left = `${maxRight}px`
        childBlock.style.top = `${maxDown}px`
        return
    }
 
    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`

    if (positionX < maxRight) {
        positionX += step
    } else if (positionY < maxDown) {
        positionY += step
    }
 
    requestAnimationFrame(() => moveChildBlock(positionX, positionY))
}
 
window.addEventListener('load', () => moveChildBlock())





const secondsBlock = document.querySelector('#seconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')
 
let seconds = 0
let timerId = null 

startBtn.addEventListener('click', () => {
    if (timerId !== null) return
 
    timerId = setInterval(() => {
        seconds++
        secondsBlock.textContent = seconds
    }, 1000)
})
 
stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
    timerId = null
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerId) 
    timerId = null
    seconds = 0
    secondsBlock.textContent = seconds
})






// Дз номер 4.

const defaultImage = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Default'
 
const charactersList = document.querySelector('.characters-list')
 
fetch('../data/characters.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Ошибка загрузки characters.json: ${response.status}`)
        }
        return response.json()
    })
    .then((characters) => {
        characters.forEach((character) => {
            const card = document.createElement('div')
            card.classList.add('character-card')
 
            card.innerHTML = `
                <div class="character-photo">
                    <img src="${character.photo || defaultImage}" alt="${character.name}">
                </div>
                <h4>${character.name}</h4>
                <p>Возраст: ${character.age}</p>
            `
 
            charactersList.appendChild(card)
        })
    })
    .catch((error) => {
        console.log('Не удалось загрузить персонажей:', error.message)
    })
 


 

const anyRequest = new XMLHttpRequest();
anyRequest.open('GET', '../data/any.json');
anyRequest.setRequestHeader('Content-type', 'application/json');
anyRequest.send();

anyRequest.onload = () => {
    if (anyRequest.status === 200) {
        const responseData = JSON.parse(anyRequest.response);
        console.log(responseData); // Данные выведутся в консоль
    }
};



 
