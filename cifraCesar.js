let word = window.prompt('Coloque a Palavra para Cripitogravar')
let sequence = Number(window.prompt('Qual posição deseja escolher?'))
let splitWord = word.split('')


for (let i = 0; i < splitWord.length; i++) {
    var letter = splitWord[i].charCodeAt()
    var cryptograh = letter + Number(sequence)
    var convert = (String.fromCharCode(cryptograh))
    console.log(convert)
}








