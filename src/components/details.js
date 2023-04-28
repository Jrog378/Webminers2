const details = [
    {
        id: 19,
        title: 'Crypto Programming - Python Crypto Libraries Used For Investing',
        date: 'Apr 26th 2023',
        text: 'Programming in crypto gives you an advantage in the market that requires libraries to help ' +
            'you with this. Here are some essential Python libraries for crypto programming.',
        url: '/articles/python-crypto-libraries',
        img: 'CryptoCodingMain.webp',
        alt: 'Mac laptop with multiple lines of code shown on its screen next to a black mouse as ' +
            'well as a black iPhone and Apple watch.'
    },
    {
        id: 18,
        title: 'Best Efficient Crypto to Buy - Efficient Crypto Updates',
        date: 'Apr 24th 2023',
        text: 'There are many ways to find the best crypto to invest in. Efficiency remains the most                      ' +
            'accurate and we will be going into four of the most efficient cryptos to pick from.',
        url: '/articles/best-efficient-crypto',
        img: 'BestCryptoMain.webp',
        alt: 'Three cryptocurrency coins resting on top of a one hundred dollar bill with a piece ' +
            'of paper on top and a gold watch next to it.'
    },
    {
        id: 17,
        title: 'Python for Crypto and Finance - How FinTech Uses Python to Make Lots of Money',
        date: 'Apr 13th 2023',
        text: 'Python for Crypto and Finance has never been in more demand. There is more money to be made and the ' +
            'only question is how. We dive into AI, Automation, Quants, and Data Visualization for Finance.',
        url: '/articles/python-for-finance',
        img: 'PythonFinMain.webp',
        alt: 'Robot hand reaching out with one finger to a geometrically shaped group of white lines ' +
            'with a black background lit up by light.'
    },
    {
        id: 16,
        title: 'Finding the Next Big Cryptocurrency - How I Find Cryptos in 2023',
        date: 'Apr 3rd 2023',
        text: 'There are many ways to find profitable coins in investing. It takes efficiency, ' +
            'popularity, and longevity to determine how successful a cryptocurrency will be.',
        url: '/articles/next-big-crypto',
        img: 'BigCryptoMain.webp',
        alt: 'A tiny clay man in a blue jacket and brown hair reading a book sitting on a pile of ' +
            'eleven foreign coins with gold coatings.'
    },
    {
        id: 15,
        title: 'How to Start Investing in Crypto - What I Did to Create my Crypto Investing System',
        date: 'Mar 28th 2023',
        text: 'Finding valuable investments and creating your own investing system can seem complex' +
            'but things can be much easier than they seem with the right guidance.',
        url: '/articles/start-investing',
        img: 'StartInvestingMain.webp',
        alt: 'Black iPhone screen displaying the stocks app with 6 different companies resting on a sheet' +
            ' of paper with a blue chart on it.'
    },
    {
        id: 14,
        title: 'What Makes Investing a Timeless Money Maker',
        date: 'Mar 18th 2023',
        text: 'Timeless money making comes best from investing, where there are many forms, each having its own ' +
            'strengths and weaknesses',
        url: '/articles/timeless-investing',
        img: 'TimelessMain.webp',
        alt: 'Pink piggy bank that has a coin in it\'s slot on a white table surrounded in ten bronze coins'
    },
    {
        id: 13,
        title: 'What it Takes to Become a Smart Emotionless Crypto Investor',
        date: 'Mar 14th 2023',
        text: 'Becoming a Smart Emotionless Investor takes dedication through Investing Systems, limiting your' +
            ' strategies, and constant research.',
        url: '/articles/top-investor',
        img: 'TopMain.webp',
        alt: 'Maroon and old styled typewriter with aged metal parts that has written on a white page to never be afraid'
    },
    {
        id: 12,
        title: 'The Best Ways to Improve your Mental State for Smarter Crypto Investing',
        date: 'Mar 13th 2023',
        text: 'The best ways to improve your mental state for smarter investing by improving your diet, physical ' +
            'health, mentality, and goals.',
        url: '/articles/mental-improve',
        img: 'MentalMain.webp',
        alt: 'Digital Portfolio Balance on a phone screen displayed using a green line and a black background' +
            'sitting on a wooden desk that has a plant on it.'
    },
    {
        id: 11,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 4',
        date: 'Feb 6th 2023',
        text: 'Many upgrades have occurred since you last saw a Webminers article. We are adding features like ' +
            'Market Insights, Asset Balancing, and Asset Efficiency.',
        url: '/articles/new-services',
        img: 'NewServicesMain.webp',
        alt: 'Digital Portfolio Balance on a phone screen displayed using a green line and a black background' +
            'sitting on a wooden desk that has a plant on it.'
    },
    {
        id: 10,
        title: 'Avoid the copy and paste psyche & break applicant uniformity',
        date: 'Oct 26th 2022',
        text: 'The world of developers and programmers is a plentiful place. However, you want to show how ' +
            'different you are and stand out with what you have.',
        url: '/articles/stand-out',
        img: 'UniqueMain.webp',
        alt: 'Calculator application overtop of a white screen with code in blue, purple and orange color ' +
            'typed on it on a mac laptop.'
    },
    {
        id: 9,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 3',
        date: 'Oct 15th 2022',
        text: 'Introduction to the new blog site that has been fully redone along with summary of the new ' +
            'categories and plans to come for webminers.',
        url: '/articles/new-webminers',
        img: 'SiteMain.webp',
        alt: 'Four lit up light bulbs all handing in a line from black wires with one swinging off to the side like a newton\'s cradle.'
    },
    {
        id: 8,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 2',
        date: 'Sep 28th 2022',
        text: 'Improvements to Webminers are necessary and this is a brief overview of some of the things we have planned to come for readers.',
        url: '/articles/new-changes',
        img: 'ImproveMain.webp',
        alt: 'A black calculator, paperclip, and a pen on a piece of paper with a bar graph that has many thin black bars.'
    },
    {
        id: 7,
        title: 'What Truly Makes a Good Technical Copywriter Stand Out',
        date: 'Sep 19th 2022',
        text: 'How to become a better technical copywriter and develop in-demand skills to make an impact and provide these services to businesses.',
        url: '/articles/good-tech-writer',
        img: 'GoodWriterMain.webp',
        alt: 'Older dip pen resting on a black tabletop and a black background along with a black shadow covering over them.'
    },
    {
        id: 6,
        title: '6 Growing Jobs To Take Advantage of Our Technical Future',
        date: 'Sep 14th 2022',
        text: 'As Jobs began to be automated and replaced by technology, here are the few that have a prosperous future for anyone to take advantage.',
        url: '/articles/tech-future',
        img: 'TechieMain.webp',
        alt: 'Black glasses sitting in front of 4 computer screens where only through the glasses the image is clear.'
    },
    {
        id: 5,
        title: 'Satellites - The Space Spies That Watch Over The World',
        date: 'Sep 11th 2022',
        text: 'Explaining the good and bad of constant satellite recording with where we draw the line between spying on people and privacy.',
        url: '/articles/space-spies',
        img: 'SatMain.webp',
        alt: 'Satellite in space looking down onto earth where there are brown dry mountains next to a deep blue body of water.'
    },
    {
        id: 4,
        title: 'Python Has Been Taking Over The Data Science World',
        date: 'Sep 7th 2022',
        text: 'Python has been hitting the world by storm, becoming the most popular programming language, especially in Data Science. Let\'s see why.',
        url: '/articles/python-data-science',
        img: 'PythonDataMain.webp',
        alt: 'Person in a black hoodie typing on a Mac Laptop with a black mouse next to it with green colored code filling the page.'
    },
    {
        id: 3,
        title: 'Data Visualization - A Profitable Data Science Subcategory',
        date: 'Sep 6th 2022',
        text: 'Data Visualization is the art of displaying data in a way that anyone can read allowing for the value of true creativity to be shown.',
        url: '/articles/data-vis',
        img: 'VisualMain.webp',
        alt: 'Bar graph on a purple sheet of paper with an iPhone displaying the calculator app next to a set of pencils and a notebook.'
    },
    {
        id: 2,
        title: 'Ethical Hackers Are Needed More Than Ever In Our Future',
        date: 'Sep 5th 2022',
        text: 'As hackers are getting better and better, what can truly be done to stop them to keep you and your family digitally safe.',
        url: '/articles/ethical-hacking',
        img: 'computer-security-lock-and-payment.webp',
        alt: 'MacBook Pro Laptop with two credit cards resting on the keyboard with a padlock on top of those.'
    },
    {
        id: 1,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 1',
        date: 'Sep 4th 2022',
        text: 'Starting from programming to engineering to programming. The full cycle of why Jus is where he is and why',
        url: '/articles/introduction',
        img: 'IntroMain.webp',
        alt: 'Man in a black suit suit and a light grey shirt that is reaching out his hand for a greeting handshake.'
    }
]
export default details;