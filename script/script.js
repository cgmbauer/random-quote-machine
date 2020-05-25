// array of displayed quotes
const phrases = [
    {
        phrase: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        author: '- Nelson Mandela'
    },
    {
        phrase: `"The way to get started is to quit talking and begin doing."`,
        author: '- Walt Disney'
    },
    {
        phrase: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        author: `- Steve Jobs`
    },
    {
        phrase: `"If life were predictable it would cease to be life, and be without flavor."`,
        author: `- Eleanor Roosevelt`
    },
    {
        phrase: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        author: `- Oprah Winfrey`
    },
    {
        phrase: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        author: `- James Cameron`
    },
    {
        phrase: `"Life is what happens when you're busy making other plans."`,
        author: `- John Lennon`
    },
    {
        phrase: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
        author: `- Mother Teresa`
    },
    {
        phrase: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
        author: `- Ralph Waldo Emerson`
    },
    {
        phrase: `"Whoever is happy will make others happy too."`,
        author: `- Anne Frank`
    },
    {
        phrase: `It is during our darkest moments that we must focus to see the light."`,
        author: `- Aristotle`
    },
    {
        phrase: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
        author: `- Hellen Keller`
    },
    {
        phrase: `"The purpose of our lives is to be happy."`,
        author: `Dalai Lama`
    },
    {
        phrase: `"Only a life lived for others is a life worthwhile."`,
        author: `- Albert Einstein`
    },
    {
        phrase: `"You only live once, but if you do it right, once is enough."`,
        author: `- Mae West`
    },
    {
        phrase: `"Love the life you live. Live the life you love."`,
        author: `- Bob Marley`
    },
    {
        phrase: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
        author: `- Dr. Seuss`
    },
    {
        phrase: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
        author: `- Thomas A. Edison`
    },
    {
        phrase: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
        author: `- Winston S. Churchill`
    },
    {
        phrase: `"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."`,
        author: `- Barack Obama`
    }
]

// array of colors
const colorP = ["#7c1ea3", "#26c6da", "#d32f2f", "#00796b", "#827717", "#004d40", "#dd2c00"];

const colorSL = ["#af52d5", "#6ff9ff", "#ff6659", "#48a999", "#b4a647", "#39796b", "#ff6434"];

const colorSD = ["#4a0073", "#0095a8", "#9a0007", "#004c40", "#524c00", "#00251a", "#a30000"];

// get elements by their ID
const headerBackGround = document.getElementById('header');
const h3Title = document.getElementById('card-title');
const quoteBox = document.getElementById('quote-box');
const quoteButton = document.getElementById('new-quote');
const twitterButton = document.getElementById('twitter');
const text = document.getElementById('text');
const author = document.getElementById('author');

// after the page is loaded


const changeStyles = () => {
    const randomPhrase = Math.floor(Math.random()*19); // get an index to acess phrase array
    const randomColor = Math.floor(Math.random()*4); // get an index to acess the colors arrays

    let displayedPhrase = phrases[randomPhrase].phrase; // quote to be displayed
    let displayedAuthor = phrases[randomPhrase].author; // author of the quote to be displayed
    
    text.textContent = displayedPhrase; // rendering quote on the page
    author.textContent = displayedAuthor; // rendering author of the quote

    headerBackGround.style.backgroundColor = h3Title.style.color = colorSD[randomColor]; // setting colors for the header background and h3 text color

    quoteButton.style.backgroundColor = twitterButton.style.color = colorSL[randomColor];
    twitterButton.style.border = `1px solid ${colorSL[randomColor]}`;

    quoteBox.style.color = document.body.style.backgroundColor = colorP[randomColor];
}


document.addEventListener("load", changeStyles()); // generate styles, quotes and author after page is loaded
quoteButton.addEventListener("click", changeStyles); // generate styles, quotes and author after button is clicked


