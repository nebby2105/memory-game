const symbols = ['🍉', '🍎', '🍋', '🍇', '🍒', '🍓', '🥥', '🍍'];
const doubledSymbols = [...symbols, ...symbols];
const grid = document.querySelector('.grid');
let cardsChosen = [];
let cardsChosenId = [];
let cardsMatched = [];

class Card {
    constructor(symbol) {
        this.symbol = symbol;
        this.isFlipped = false;
        this.cardElement = this.createCardElement();
        this.frontSide = this.cardElement.querySelector('.front');
        this.backSide = this.cardElement.querySelector('.back')
        this.cardElement.addEventListener('click', this.flip.bind(this));
    }

    createCardElement() {
        const card = document.createElement('div');
        card.classList.add('card');
        const frontSide = document.createElement('div');
        frontSide.classList.add('front');
        const backSide = document.createElement('div');
        backSide.classList.add('back');
        backSide.textContent = this.symbol;
        card.appendChild(frontSide);
        card.appendChild(backSide);

        return card;
    }

    flip() {
        if (!this.isFlipped) {
            this.cardElement.classList.add('flipped');
            this.isFlipped = true;
            console.log('card is flipped');
        } else {
            this.cardElement.classList.remove('flipped');
            this.isFlipped = false;
            console.log('flipped back');
        }
    }
}

function generateCards() {
    for (let i = 0; i < doubledSymbols.length; i++) {
        const card = new Card(doubledSymbols[i]);
        grid.appendChild(card.cardElement);
    }
}
 
generateCards();

// function generateCards () {
//     const doubledSymbols = [...symbols, ...symbols];

//     for (let i = 0; i < doubledSymbols.length; i++) {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.setAttribute('data-id', i);

//         const frontSide = document.createElement('div');
//         frontSide.classList.add('front');
//         const backSide = document.createElement('div');
//         backSide.classList.add('back');
//         backSide.textContent = doubledSymbols[i];

//         card.appendChild(frontSide);
//         card.appendChild(backSide);

//         card.addEventListener('click', flipCard);

//         grid.appendChild(card);
//     }
// }







// document.addEventListener('DOMContentLoaded', () => {
//     const symbols = ['🍉', '🍎', '🍋', '🍇', '🍒', '🍓', '🥥', '🍍']; // Add more symbols as needed
//     const grid = document.querySelector('.grid');
//     let cardsChosen = [];
//     let cardsChosenId = [];
//     let cardsMatched = [];

//     // Create the board
//     function createBoard() {
//         const shuffledSymbols = [...symbols, ...symbols].sort(() => 0.5 - Math.random());
//         for (let i = 0; i < shuffledSymbols.length; i++) {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.setAttribute('data-id', i);
//             card.innerHTML = `<span class="hidden">${shuffledSymbols[i]}</span>`;
//             card.addEventListener('click', flipCard);
//             grid.appendChild(card);
//         }
//     }

//     // Flip the card
//     function flipCard() {
//         if (cardsChosenId.length === 2) return;
//         const card = this.querySelector('span');
//         if (!card.classList.contains('hidden')) return;
//         card.classList.remove('hidden');
//         const cardId = this.getAttribute('data-id');
//         cardsChosen.push(card.textContent);
//         cardsChosenId.push(cardId);
//         if (cardsChosen.length === 2) {
//             setTimeout(checkForMatch, 500);
//         }
//     }

//     // Check for a match
//     function checkForMatch() {
//         const [id1, id2] = cardsChosenId;
//         const cards = document.querySelectorAll('.card');
//         if (cardsChosen[0] === cardsChosen[1] && id1 !== id2) {
//             cardsMatched.push(id1, id2);
//             cards[id1].classList.add('matched');
//             cards[id2].classList.add('matched');
//         } else {
//             cards[id1].querySelector('span').classList.add('hidden');
//             cards[id2].querySelector('span').classList.add('hidden');
//         }
//         cardsChosen = [];
//         cardsChosenId = [];
//         checkGameEnd();
//     }

//     // Check if all cards are matched
//     function checkGameEnd() {
//         if (cardsMatched.length === symbols.length * 2) {
//             alert('Congratulations! You won!');
//             resetGame();
//         }
//     }

//     // Reset the game
//     function resetGame() {
//         grid.innerHTML = '';
//         cardsChosen = [];
//         cardsChosenId = [];
//         cardsMatched = [];
//         createBoard();
//     }

//     createBoard();
// });

