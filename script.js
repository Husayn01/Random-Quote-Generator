

function getRandomQuote() {

    var random  = Math.floor(Math.random() * 74);

    var randomQuote = [ 
   "The greatest glory in living lies not in never falling, but in rising every time we fall.  " + "<br/>" + "   -Nelson Mandela",

    "The way to get started is to quit talking  and begin doing. " + "<br/>" + "  -Walt Disney",
    
   "Your time is limited, so don't waste it living  someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. " + "<br/>" + "  -Steve Jobs",
    
    "If life were predictable it would cease to be life, and be without flavor.  " + "<br/>" + " -Eleanor Roosevelt",
    
   "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. " + "<br/>" + "  -Oprah Winfrey",
    
   "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. " + "<br/>" + "  -James Cameron",
    
   "Life is what happens when you're busy making other plans. " + "<br/>" + "  -John Lennon",
    
   "Spread love everywhere you go. Let no one ever come to you without leaving happier.  " + "<br/>" + " -Mother Teresa",
    
   "When you reach the end of your rope, tie a knot in it and hang on. " + "<br/>" + "  -Franklin D. Roosevelt",

    "Always remember that you are absolutely unique. Just like everyone else. " + "<br/>" + "  -Margaret Mead",

    "Don't judge each day by the harvest you reap but by the seeds that you plant.  " + "<br/>" + " -Robert Louis Stevenson",

    "The future belongs to those who believe in the beauty of their dreams.  " + "<br/>" + " -Eleanor Roosevelt",

    "Tell me and I forget. Teach me and I remember. Involve me and I learn. " + "<br/>" + "  -Benjamin Franklin",

    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. " + "<br/>" + "  -Helen Keller",

    "It is during our darkest moments that we must focus to see the light. " + "<br/>" + "  -Aristotle",

    "Whoever is happy will make others happy too.  " + "<br/>" + " -Anne Frank",

    "Do not go where the path may lead, go instead where there is no path and leave a trail. " + "<br/>" + "  -Ralph Waldo Emerson",

    "You will face many defeats in life, but never let yourself be defeated.  " + "<br/>" + " -Maya Angelou",

    "The greatest glory in living lies not in never falling, but in rising every time we fall.  " + "<br/>" + " -Nelson Mandela",

    "In the end, it's not the years in your life that count. It's the life in your years.  " + "<br/>" + " -Abraham Lincoln",

    "Never let the fear of striking out keep you from playing the game. " + "<br/>" + "  -Babe Ruth",

    "Life is either a daring adventure or nothing at all. " + "<br/>" + "  -Helen Keller",

    "Many of life's failures are people who did not realize how close they were to success when they gave up.  " + "<br/>" + " -Thomas A. Edison",

    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. " + "<br/>" + "  -Dr. Seuss",

    "If life were predictable it would cease to be life and be without flavor.  " + "<br/>" + " -Eleanor Roosevelt",

    "In the end, it's not the years in your life that count. It's the life in your years.  " + "<br/>" + " -Abraham Lincoln",

    "Life is a succession of lessons which must be lived to be understood. " + "<br/>" + " -Ralph Waldo Emerson",

    "You will face many defeats in life, but never let yourself be defeated. " + "<br/>" + "  -Maya Angelou",

    "Never let the fear of striking out keep you from playing the game.  " + "<br/>" + " -Babe Ruth",

    "Life is never fair, and perhaps it is a good thing for most of us that it is not.  " + "<br/>" + " -Oscar Wilde",

    "The only impossible journey is the one you never begin. " + "<br/>" + "  -Tony Robbins",

    "In this life we cannot do great things. We can only do small things with great love. " + "<br/>" + "  -Mother Teresa",

    "Only a life lived for others is a life worthwhile. " + "<br/>" + "  -Albert Einstein",

    "The purpose of our lives is to be happy.  " + "<br/>" + " -Dalai Lama",

    "Its the courage to continue that counts.  " + "<br/>" + " -Winston S. Churchill",

    "Success usually comes to those who are too busy to be looking for it. " + "<br/>" + "  -Henry David Thoreau",

    "The way to get started is to quit talking and begin doing. " + "<br/>" + "  -Walt Disney",

    "If you really look closely, most overnight successes took a long time.  " + "<br/>" + " -Steve Jobs",

    "The secret of success is to do the common thing uncommonly well.  " + "<br/>" + " -John D. Rockefeller Jr.",

    "I find that the harder I work, the more luck I seem to have.  " + "<br/>" + " -Thomas Jefferson",

    "The secret of success is to do the common thing uncommonly well. " + "<br/>" + " -John D. Rockefeller Jr.",

    "I find that the harder I work, the more luck I seem to have.  " + "<br/>" + " -Thomas Jefferson",

    "Success is not final; failure is not fatal: It is the courage to continue that counts. " + "<br/>" + "  -Winston S. Churchill",

    "The way to get started is to quit talking and begin doing.  " + "<br/>" + " -Walt Disney",

    "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you. " + "<br/>" + "  -Zig Ziglar",

    "Success usually comes to those who are too busy to be looking for it.  " + "<br/>" + " -Henry David Thoreau",

    "I never dreamed about success, I worked for it. " + "<br/>" + "  -Estee Lauder",

    "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit. " + "<br/>" + "  -Conrad Hilton",

    "There are no secrets to success. It is the result of preparation hardwork and learning from failure.  " + "<br/>" + " -Colin Powell",

    "The only limit to our realization of tomorrow will be our doubts of today. " + "<br/>" + "  -Franklin D. Roosevelt",

    "It is better to fail in originality than to succeed in imitation.  " + "<br/>" + " -Herman Melville",

    "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.  " + "<br/>" + " -Jim Rohn",

    "Winning isn't everything, but wanting to win is.  " + "<br/>" + " -Vince Lombardi",

    "Whether you think you can or you think you can't, you're right. " + "<br/>" + "  -Henry Ford",

    "You miss 100% of the shots you don't take.  " + "<br/>" + " -Wayne Gretzky",

    "I alone cannot change the world, but I can cast a stone across the water to create many ripples.  " + "<br/>" + " -Mother Teresa",

    "You become what you believe.  " + "<br/>" + " -Oprah Winfrey",

    "The most difficult thing is the decision to act, the rest is merely tenacity.  " + "<br/>" + " -Amelia Earhart",

    "How wonderful it is that nobody need wait a single moment before starting to improve the world.  " + "<br/>" + " -Anne Frank",

    "An unexamined life is not worth living.  " + "<br/>" + " -Socrates",

    "Everything you've ever wanted is on the other side of fear.  " + "<br/>" + " -George Addair",

    "Dream big and dare to fail.  " + "<br/>" + " -Norman Vaughan",

    "You may be disappointed if you fail, but you are doomed if you don't try.  " + "<br/>" + " -Beverly Sills",

    "Life is 10% what happens to me and 90% of how I react to it. " + "<br/>" + "  -Charles Swindoll",

    "Nothing is impossible, the word itself says, ‘I'm possible!  " + "<br/>" + " -Audrey Hepburn",

    "It does not matter how slowly you go as long as you do not stop.  " + "<br/>" + " -Confucius",

    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. " + "<br/>" + "  -Henry Ford",

    "Too many of us are not living our dreams because we are living our fears  " + "<br/>" + " -Les Brown",

    "I have learned over the years that when one's mind is made up, this diminishes fear. " + "<br/>" + "  -Rosa Parks",

    "I didn't fail the test. I just found 100 ways to do it wrong. " + "<br/>" + "  -Benjamin Franklin",

    "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.  " + "<br/>" + " -Sheryl Sandberg",

    "I attribute my success to this: I never gave or took any excuse. " + "<br/>" + "  -Florence Nightingale",

    "I would rather die of passion than of boredom.  " + "<br/>" + " -Vincent van Gogh",

    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. " + "<br/>" + "  -Oprah Winfrey",

]; 
quote = document.getElementById("quote").innerHTML= randomQuote[random];

var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);

var bgColor = "rgb(" + x + "," + y + "," + y + ")";
console.log(bgColor);
document.body.style.backgroundColor= bgColor;

}