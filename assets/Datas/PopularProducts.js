const popularProducts = [
  {
    id: 1,
    productName: 'Jupiter',
    generalDescription: 'Jupiter is a decentralized exchange (DEX) aggregator on Solana that facilitates token swaps with low slippage and minimal fees, offering features like swap, limit orders, perpetual trading, and DCA — dollar-cost-averaging.',
    price: 150,
    image: require('../Images/jupiter.png'),
    category: 'Quests',
    maxPages: 2,
    imagePageOne: require('../Images/JupiterOne.png'),
    imagePageTwo: require('../Images/Solana.png'),
    imagePageThree: require('../Images/Solana.png'),
    imagePageFour: require('../Images/Solana.png'),
    headlinePageOne: 'Smart Routing',
    descriptionPageOne: 'Jupiter directly connects all DEX markets and AMM pools together no matter the provider and will find all direct and multi-hop routes between any two tokens on Solana.',
    
    headlinePageTwo:'Trade Splitting',
    descriptionPageTwo: 'Jupiter will split your trade into smaller trade sizes. For example, if you want to make a 100 USDC-SOL trade, it may distribute your trade into a 30 USDC-SOL trade on Raydium and a 70 USDC-SOL trade on Orca. ',
    
    headlinePageThree: '',
    descriptionPageThree: '',

    headlinePageFour: '',
    descriptionPageFour: '',

  },
  {
    id: 2,
    productName: 'Solflare',
    price: 100,
    image: require('../Images/solflare.png'),
    category: 'Quests',
  },
  {
    id: 3,
    productName: 'Marginfi',
    price: 250,
    image: require('../Images/marginfi.png'),
    category: 'Quests',
  },
  {
    id: 3,
    productName: 'SuperTeam DE',
    price: 250,
    image: require('../Images/superteam.png'),
    category: 'Quests',
  },
];

export default popularProducts;
