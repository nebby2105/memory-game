// const symbols = ['🍉', '🍎', '🍋', '🍇', '🍒', '🍓', '🥥', '🍍'];
const images = ['img/spider1.jpg', 'img/spider2.jpg', 'img/spider3.jpg', 'img/spider4.jpg', 'img/spider5.jpg', 'img/spider6.jpg', 'img/spider7.jpg', 'img/spider8.jpg'];
const doubledImages = [...images, ...images];
const grid = document.querySelector('.grid');
const startButton = document.getElementById('startButton');
let cardsChosen = [];
let cardsChosenId = [];
let cardsMatched = [];
const modal = document.getElementById('modal');
const playAgainBtn = document.getElementById('playAgainBtn');
const noBtn = document.getElementById('noBtn'); 

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    grid.classList.remove('hidden');
    generateCards(); 
});

class Card {
    constructor(imageUrl, id) {
        this.imageUrl = imageUrl;
        this.id = id;
        this.isFlipped = true;
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
        const backImg = document.createElement('img');
        backImg.src = this.imageUrl;
        back.appendChild(backImg);

        card.appendChild(front);
        card.appendChild(back);

        return card;
    }

    flip() {
        if (cardsChosen.length < 2 && !this.isMatched) { 
            this.isFlipped = !this.isFlipped;
            this.cardElement.classList.toggle('flipped');
            cardsChosen.push(this.cardElement);
            if (cardsChosen.length === 2) {
                checkForMatch();
            }
        }
    }
}

function generateCards() {
    const shuffledImages = doubledImages.slice().sort(() => Math.random() - 0.5);
    for (let image of shuffledImages) {
        const card = new Card(image);
        grid.appendChild(card.cardElement);
    }
}


function checkForMatch() {
    const [card1, card2] = cardsChosen;
    const imageUrl1 = card1.querySelector('.back img').src;
    const imageUrl2 = card2.querySelector('.back img').src; 

    if (imageUrl1 === imageUrl2) {
        cardsMatched.push(card1, card2);
        cardsChosen = [];
        card1.isMatched = true;
        card2.isMatched = true;

        if (cardsMatched.length === doubledImages.length) {
            setTimeout(showModal, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList .remove('flipped');
            cardsChosen = [];

        }, 1000);
    }
}

function showModal() {
    modal.style.display = "block";

    playAgainBtn.addEventListener('click', function() {
        resetGame();
        modal.style.display = "none";
    });

    noBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
  };

  function resetGame() {
    grid.innerHTML = '';
    cardsChosen = [];
    cardsChosenId = [];
    cardsMatched = [];

    generateCards();
}




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


