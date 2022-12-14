const switchButton = document.querySelector('.switch')
const Paragraph = document.querySelector('.Paragraph')
const body = document.body

switchButton.addEventListener('click',function(){
    let firstColor = getRandomNumbers()
    let secondColor = getRandomNumbers()
    let thirdColor = getRandomNumbers()

    const colorNumber = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
body.style.backgroundColor = colorNumber
Paragraph.innerText = colorNumber



})
function getRandomNumbers(){
    return Math.floor(Math.random() * 256)
}

