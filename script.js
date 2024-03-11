const symbols = ['🍉', '🍎', '🍋', '🍇', '🍒', '🍓', '🥥', '🍍'];
const doubledSymbols = [...symbols, ...symbols];
const grid = document.querySelector('.grid');
let cardsChosen = [];
let cardsChosenId = [];
let cardsMatched = [];

class Card {
    constructor(symbol, id) {
        this.symbol = symbol;
        this.id = id;
        this.isFlipped = false;
        this.cardElement = this.createCardElement();
        this.cardElement.addEventListener('click', () => this.flip());
    }

    createCardElement() {
        const card = document.createElement('div');
        card.classList.add('card');

        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = 'Spider'; 

        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = this.symbol;

        card.appendChild(front);
        card.appendChild(back);

        return card;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
        this.cardElement.classList.toggle('flipped');
    }
}

function generateCards() {
    for (let symbol of doubledSymbols) {
        const card = new Card(symbol);
        grid.appendChild(card.cardElement);
    }
}

generateCards();




// const symbols = ['🍉', '🍎', '🍋', '🍇', '🍒', '🍓', '🥥', '🍍'];
// const doubledSymbols = [...symbols, ...symbols];
// const grid = document.querySelector('.grid');
// let cardsChosen = [];
// let cardsChosenId = [];
// let cardsMatched = [];

// class Card {
//     constructor(symbol) {
//         this.symbol = symbol;
//         this.isFlipped = false;
//         this.cardElement = this.createCardElement();
//         this.frontSide = this.cardElement.querySelector('.front');
//         this.backSide = this.cardElement.querySelector('.back')
//         this.cardElement.addEventListener('click', this.flip.bind(this));
//     }

//     createCardElement() {
//         const card = document.createElement('div');
//         card.classList.add('card');
        
//         const frontSide = document.createElement('div');
//         frontSide.classList.add('front');
//         frontSide.textContent = 'Spider'; // Initial content
//         this.frontSide = frontSide; // Save a reference for later use
        
//         const backSide = document.createElement('div');
//         backSide.classList.add('back');
//         backSide.textContent = this.symbol;
//         this.backSide = backSide; // Save a reference for later use
        
//         card.appendChild(frontSide);
//         card.appendChild(backSide);
    
//         return card;
//     }

//     flip() {
//         if (!this.isFlipped && cardsChosen.length < 2) {
//             this.cardElement.classList.add('flipped');
//             this.isFlipped = true;
//             // Update the content of the front side to the symbol
//             this.frontSide.textContent = this.symbol;
//             cardsChosen.push(this.symbol);
//             cardsChosenId.push(this.cardElement);
//             if (cardsChosen.length === 2) {
//                 setTimeout(checkForMatch, 500);
//             }
//         } else if (this.isFlipped && cardsChosen.length === 2) {
//             this.cardElement.classList.remove('flipped');
//             this.isFlipped = false;
//             // Revert the content of the front side to "Spider"
//             this.frontSide.textContent = 'Spider';
//             cardsChosen.pop();
//             cardsChosenId.pop();
//         }
//     }
// }

// function generateCards() {
//     for (let i = 0; i < doubledSymbols.length; i++) {
//         const card = new Card(doubledSymbols[i]);
//         grid.appendChild(card.cardElement);
//     }
// }
 
// generateCards();


