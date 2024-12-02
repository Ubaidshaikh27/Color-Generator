const colorContainer = document.querySelector('.colors-cointainer')

const spawnButton = document.querySelector('#spawn-button')

let colorBlock = ['', '', '', '']


function getRandom() {
    return Math.floor(Math.random() * 255)
}

function spawn() {

    colorContainer.innerHTML = ''

    const commonColor = getRandom()
    console.log('commonColor', commonColor)

    colorBlock.forEach((_colorBlock, index) => {
        colorBlock[index] = 
        'rgb(' + commonColor + ',' + getRandom() + ',' + getRandom() + ')'
    })

    colorBlock.forEach(colorBlock => {
        const divElement = document.createElement('div')
        divElement.style.backgroundColor = colorBlock
        divElement.textContent = colorBlock
        colorContainer.append(divElement)
    })
}

spawn()
spawnButton.addEventListener('click', spawn)
document.addEventListener('keydown', spawn)

