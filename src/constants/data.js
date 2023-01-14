import images from './images';

const juice = [
  {
    title: 'Mango Juice',
    price: '$56',
    tags: '750 ml',
  },
  {
    title: 'Orange Juice',
    price: '$59',
    tags: '750 ml',
  },
  {
    title: 'Strawberry Juice',
    price: '$44',
    tags: '750 ml',
  },
  {
    title: 'Apple Juice',
    price: '$31',
    tags: '750 ml',
  },
  {
    title: 'Watermelon Juice',
    price: '$26',
    tags: '750 ml',
  },
];

const cocktails = [
  {
    title: 'fruits',
    price: '$20',
    tags: 'Mongo | banana',
  },
  {
    title: "ice cream",
    price: '$16',
    tags: 'milk',
  },
  {
    title: 'ice cream',
    price: '$10',
    tags: 'Lemon | Orange',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'sugar',
  },
  {
    title: 'Molten',
    price: '$26',
    tags: 'Chocklate',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const data = { 
  juice,
  cocktails,
  awards 
}

export default data;
