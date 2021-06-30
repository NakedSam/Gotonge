VOWELS = ["a", "e", "i", "o", "u", "aa", "ee", "ii", "oo", "uu"]
CONSONANTS = ["p", "b", "t", "d", "ts", "dz", "f", "v", "sh", "j", "s", "z", "m", "n", "y", "r", "tsh", "dj"]
END_EXCEPTIONS = ["ts", "dz", "y"]
POSSIBLE_STRUCTURES = ["CV", "CVC"]

wordsTable = document.getElementById("words-table")

numberOfPossibleCombinations = 0
generatedWords = []

//Calculates the number of consonants combinations possible
for (const consonant in CONSONANTS) {
    for (const vowel in VOWELS) {
        numberOfPossibleCombinations++

        for (const consonant in CONSONANTS) {
            if (!END_EXCEPTIONS.includes(consonant)) {
                numberOfPossibleCombinations++
            }
        }
    }
}

//Generates 100 different syllables
for (let i = 0; i < 100; i++) {
    word = ""
    randomNumber = Math.round(Math.random()) * 10

    if (randomNumber < 5) {
        structure = POSSIBLE_STRUCTURES[0]
    } else {
        structure = POSSIBLE_STRUCTURES[1]
    }
    //Generates a random consonant
    randomNumber = Math.floor(Math.random() * CONSONANTS.length)
    word = word.concat(CONSONANTS[Math.floor(randomNumber )])
    //Generates a random vowel
    randomNumber = Math.floor(Math.random() * VOWELS.length)
    word = word.concat(VOWELS[Math.floor(randomNumber)])

    if (structure === "CVC") {
        //Generates a random consonant
        randomNumber = Math.floor(Math.random() * CONSONANTS.length)
        word = word.concat(CONSONANTS[Math.floor(randomNumber)])
    }

    generatedWords.push(word)
}

//Adds the content to the page
let counter = 0
let newRow = document.createElement("tr")
//We create the table
generatedWords.forEach( word => {
    if (counter % 5 === 0) {
        wordsTable.appendChild(newRow)
        newRow = document.createElement("tr")
        counter = 0
    }     
    newTd = document.createElement("td") 
    newText = document.createTextNode(word)
    newTd.appendChild(newText)
    newRow.appendChild(newTd)

    counter ++
})

wordsTable.appendChild(newRow)