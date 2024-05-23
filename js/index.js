var quoteBox = document.querySelector(".quote-box");

var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    authorName: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    authorName: "Frank Zappa",
  },
  {
    quote:
      "There are many things that seem impossible only so long as one does not attempt them.",
    authorName: "André Gide, Autumn Leaves",
  },
  {
    quote: "A room without books is like a body without a soul.",
    authorName: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Sometimes the questions are complicated and the answers are simple.",
    authorName: "Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    authorName: "Mae West",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    authorName: "Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.",
    authorName: "Markus Zusak, I Am the Messenger",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving",
    authorName: "Albert Einstein",
  },
  {
    quote:
      "The reason I talk to myself is because I’m the only one whose answers I accept.",
    authorName: "George Carlin",
  },
];

var previousNum;

function generateQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);

  if (randomNum === previousNum) {
    console.log(randomNum);
    randomNum = Math.floor(Math.random() * quotes.length);
  }

  previousNum = randomNum;
  quoteBox.innerHTML = `<div class="quote container mt-5">
            <i class="fas fa-quote-left fa-2x fa-pull-left fs-3"></i>
            <p class='fs-4'>${quotes[randomNum].quote}</p>
          </div>
          <span class="author fs-4 fw-light">
              -- ${quotes[randomNum].authorName}
          </span>`;
}
