const quotes = [
    {
      quote: "누구에게나 처음은 있잖아요.그 처음이 오늘이니까 오늘까지만 서툴겠습니다." ,
      author: "스물 다섯 스물 하나 ",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  const todaysQuot = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuot.quote;
  author.innerText = todaysQuot.author;